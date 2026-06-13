export const multimodalUnit5Content = {
  unit5: {
    multimodalFusion: {
      title: 'Multimodal Data Fusion',
      subtitle: 'Integrating information from multiple sources for robust predictions',
      sections: [
        {
          heading: 'What is Multimodal Fusion?',
          text: '<strong>Multimodal fusion</strong> is the process of combining information from multiple modalities to produce a unified representation or decision. It is a core challenge in multimodal machine learning because different data types have different statistical properties, scales, and structures.',
          list: [
            'Fusion can happen at different levels: feature-level, decision-level, or hybrid',
            'Early fusion combines raw features; late fusion combines model outputs',
            'Attention mechanisms learn dynamic importance weights per modality',
            'The goal is to leverage complementary information while suppressing noise'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Common fusion strategies and their mathematical formulations.',
          example: {
            title: 'Example: Fusion Strategies',
            code: `Concatenation: z = [x₁; x₂]  // simple but high-dimensional

Summation:     z = x₁ + x₂   // assumes aligned dimensions

Attention:      z = Σ αᵢxᵢ   // learns dynamic weights
  where αᵢ = softmax(wᵀxᵢ)

Bilinear:       z = x₁ ⊗ x₂  // captures interactions

Gated:          z = g⊙x₁ + (1-g)⊙x₂  // learned gating`,
            output: 'Attention-based fusion adapts to data quality in real-time.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Early fusion vs late fusion vs hybrid fusion.',
          table: {
            headers: [
              'Aspect',
              'Early Fusion',
              'Late Fusion',
              'Hybrid Fusion'
            ],
            rows: [
              [
                'When',
                'Before training / at input',
                'After separate training',
                'Multiple stages'
              ],
              [
                'Input',
                'Concatenated raw features',
                'Separate per modality',
                'Both'
              ],
              [
                'Interaction',
                'Full cross-modal',
                'Limited to decision layer',
                'Flexible'
              ],
              [
                'Pros',
                'Captures low-level correlations',
                'Modular; easy to debug',
                'Best of both'
              ],
              [
                'Cons',
                'Curse of dimensionality',
                'Misses early interactions',
                'More complex'
              ],
              [
                'Best for',
                'Aligned modalities (AVSR)',
                'Diverse modalities (ensemble)',
                'Complex tasks'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Simply concatenating all modalities without normalization (fix: standardize each modality separately before fusion to balance scales)',
            'Mistake 2: Using a single fixed fusion strategy for all inputs (fix: use attention or gating so the model adapts when one modality is noisy or missing)',
            'Mistake 3: Ignoring missing modalities at test time (fix: implement modality dropout during training or use zero-imputation with learned masks)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multimodal fusion powers systems that must integrate diverse sensors and signals.',
          list: [
            'Audio-visual speech recognition (AVSR): fuses lip video with audio for robust transcription in noise',
            'Autonomous driving: combines camera, LiDAR, radar, and GPS for 360° scene understanding',
            'Medical diagnosis: integrates imaging (MRI, CT), clinical notes, and lab tests for accurate prognosis',
            'Sentiment analysis: merges text, audio tone, and facial expressions to detect true emotional state'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal fusion combines information from multiple data sources into a unified output',
            'Early fusion merges raw features; late fusion merges decisions; hybrid does both',
            'Attention and gating mechanisms adaptively weight modalities based on input quality',
            'Always normalize modalities before fusion to prevent scale dominance',
            'Handle missing modalities with dropout or learned imputation during training'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main difference between early and late fusion?\nAns: Early fusion combines raw features before training; late fusion combines separate model outputs at the decision level.',
            'Q2: Why is attention-based fusion often preferred over simple concatenation?\nAns: Attention learns dynamic importance weights, allowing the model to downweight noisy or irrelevant modalities.',
            'Q3: What preprocessing step is critical before concatenating multimodal features?\nAns: Normalization or standardization of each modality independently to prevent scale mismatch.'
          ]
        }
      ]
    },
    crossModalRetrieval: {
      title: 'Cross-Modal Retrieval',
      subtitle: 'Searching across modalities using shared semantic spaces',
      sections: [
        {
          heading: 'What is Cross-Modal Retrieval?',
          text: '<strong>Cross-modal retrieval</strong> is the task of finding relevant items in one modality given a query in another modality. Examples include retrieving images from text descriptions, finding audio clips from visual cues, or searching videos using natural language.',
          list: [
            'Requires a shared embedding space where different modalities are comparable',
            'The core idea: semantically similar items should be close in the joint space',
            'Contrastive learning (e.g., CLIP) is the dominant training paradigm',
            'Evaluation metrics: recall@K, median rank, mean average precision (mAP)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Contrastive loss pulls positive pairs together and pushes negative pairs apart.',
          example: {
            title: 'Example: Contrastive Loss (CLIP-style)',
            code: `Given batch of N (image, text) pairs:

Similarity matrix:
  S = z_img · z_textᵀ / τ

  where τ = temperature (learned or fixed)

Loss for image i:
  L_img = -log[ exp(Sᵢᵢ/τ) / Σⱼ exp(Sᵢⱼ/τ) ]

Loss for text j:
  L_txt = -log[ exp(Sⱼⱼ/τ) / Σᵢ exp(Sᵢⱼ/τ) ]

Total loss = (L_img + L_txt) / 2`,
            output: 'CLIP trained on 400M pairs achieves strong zero-shot retrieval.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Cross-modal retrieval vs unimodal retrieval.',
          table: {
            headers: [
              'Aspect',
              'Unimodal Retrieval',
              'Cross-Modal Retrieval'
            ],
            rows: [
              [
                'Query vs target',
                'Same modality',
                'Different modalities'
              ],
              [
                'Embedding space',
                'Single encoder space',
                'Joint or aligned space'
              ],
              [
                'Training',
                'Supervised on single task',
                'Contrastive or CCA-based'
              ],
              [
                'Annotation',
                'Labels in one domain',
                'Paired data across domains'
              ],
              [
                'Use case',
                'Google image search',
                'DALL-E prompt-to-image'
              ],
              [
                'Challenge',
                'Semantic gap within domain',
                'Modality gap between domains'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using Euclidean distance instead of cosine similarity in high-dimensional spaces (fix: normalize embeddings and use cosine similarity or dot product for better angular comparison)',
            'Mistake 2: Ignoring hard negatives in contrastive training (fix: use in-batch negatives and mined hard negatives to improve discrimination)',
            'Mistake 3: Assuming all retrieved pairs are correct because similarity is high (fix: always validate with human evaluation or proxy metrics; high similarity does not guarantee semantic match)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Cross-modal retrieval enables natural language interaction with visual and audio databases.',
          list: [
            'Text-to-image search: find stock photos using natural language descriptions',
            'Fashion retrieval: upload a photo and retrieve similar products with text filters',
            'Video search: find video clips matching a text query or audio snippet',
            'Medical search: retrieve relevant CT scans from radiology reports'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Cross-modal retrieval finds items in one modality using a query from another',
            'Requires a shared embedding space learned via contrastive objectives or CCA',
            'CLIP-style training uses symmetric cross-entropy on a similarity matrix',
            'Cosine similarity is preferred over Euclidean distance for normalized embeddings',
            'Hard negatives and large batch sizes significantly improve retrieval quality'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the core requirement for cross-modal retrieval to work?\nAns: A shared embedding space where semantically similar items from different modalities are mapped close together.',
            'Q2: Why is cosine similarity preferred over Euclidean distance in retrieval?\nAns: Cosine similarity measures angular alignment, which is more robust for comparing normalized high-dimensional embeddings.',
            'Q3: What is the role of temperature τ in contrastive loss?\nAns: It scales the similarity scores; lower τ sharpens the distribution, making the model more selective about positives and negatives.'
          ]
        }
      ]
    },
    multimodalGeneration: {
      title: 'Multimodal Generation',
      subtitle: 'Creating content in one modality conditioned on another',
      sections: [
        {
          heading: 'What is Multimodal Generation?',
          text: '<strong>Multimodal generation</strong> is the task of producing content in one modality (e.g., image, video, audio) conditioned on input from another modality (e.g., text, image, audio). It spans text-to-image, image-to-text, speech-to-text, and many other combinations.',
          list: [
            'Text-to-image: DALL-E, Stable Diffusion, Midjourney generate images from prompts',
            'Image-to-text: image captioning and visual question answering produce language from visuals',
            'Text-to-speech: synthesize natural voice from written text',
            'Video generation: create video sequences from text or image prompts'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Diffusion models iteratively denoise random noise guided by a text condition.',
          example: {
            title: 'Example: Diffusion Process',
            code: `Forward process (add noise over T steps):
  q(xₜ | xₜ₋₁) = N(xₜ; √(1-βₜ)xₜ₋₁, βₜI)

Reverse process (learned denoising):
  pθ(xₜ₋₁ | xₜ, c) = N(xₜ₋₁; μθ(xₜ, t, c), Σθ(xₜ, t))

  where c = text condition (CLIP embedding)

Training objective:
  L = E[||ε - εθ(xₜ, t, c)||²]

  ε = actual noise added
  εθ = predicted noise`,
            output: 'Stable Diffusion uses this in latent space for efficiency.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'GANs vs VAEs vs Diffusion Models for generation.',
          table: {
            headers: [
              'Aspect',
              'GANs',
              'VAEs',
              'Diffusion Models'
            ],
            rows: [
              [
                'Training stability',
                'Unstable (mode collapse)',
                'Stable',
                'Very stable'
              ],
              [
                'Sample quality',
                'High fidelity',
                'Blurrer',
                'Highest fidelity'
              ],
              [
                'Speed',
                'Fast (single pass)',
                'Fast',
                'Slow (many steps)'
              ],
              [
                'Conditioning',
                'Difficult',
                'Moderate',
                'Natural (cross-attention)'
              ],
              [
                'Use case',
                'Style transfer',
                'Representation learning',
                'Text-to-image'
              ],
              [
                'Architecture',
                'Generator + Discriminator',
                'Encoder + Decoder',
                'U-Net + Noise scheduler'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting exact text-to-image alignment for rare concepts (fix: use prompt engineering, negative prompts, and classifier-free guidance to improve adherence)',
            'Mistake 2: Ignoring the modality gap in encoder-decoder generation (fix: align latent spaces with contrastive pre-training before fine-tuning the generation head)',
            'Mistake 3: Using generation models without safety filtering (fix: implement content moderation and watermarking to prevent misuse and identify synthetic content)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multimodal generation is transforming creative and productive workflows.',
          list: [
            'Marketing: generate product images from text descriptions for rapid prototyping',
            'Accessibility: convert visual scenes into spoken descriptions for visually impaired users',
            'Entertainment: create video game assets and storyboards from narrative prompts',
            'Education: generate diagrams and illustrations from textbook explanations'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal generation creates content in one modality from another (text→image, image→text, etc.)',
            'Diffusion models dominate text-to-image due to high fidelity and stable training',
            'Classifier-free guidance controls the trade-off between quality and prompt adherence',
            'GANs are fast but unstable; VAEs are stable but produce blurrier outputs',
            'Safety filtering and watermarking are essential for responsible deployment'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main advantage of diffusion models over GANs for text-to-image generation?\nAns: Diffusion models are more stable to train, naturally support conditioning, and typically produce higher-quality, more diverse samples.',
            'Q2: What does classifier-free guidance control in diffusion sampling?\nAns: It balances sample quality against prompt adherence by interpolating between conditional and unconditional predictions.',
            'Q3: Why is contrastive pre-training useful before multimodal generation?\nAns: It aligns the latent spaces of different modalities, making cross-modal conditioning more effective.'
          ]
        }
      ]
    },
    multimodalDialogue: {
      title: 'Multimodal Dialogue',
      subtitle: 'Conversational AI that understands and responds across modalities',
      sections: [
        {
          heading: 'What is Multimodal Dialogue?',
          text: '<strong>Multimodal dialogue</strong> refers to conversational systems that can perceive and generate information across multiple modalities — not just text, but also images, audio, video, and gestures. These systems aim to interact with humans in the same rich, multi-sensory way that humans interact with each other.',
          list: [
            'Input: text, voice, images, video, documents, or any combination',
            'Output: text, generated images, voice responses, or mixed-media replies',
            'Requires understanding context across modalities within a conversation history',
            'Examples: GPT-4V, Gemini, visual assistants, and embodied AI agents'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A multimodal dialogue model processes interleaved text and image tokens as a single sequence.',
          example: {
            title: 'Example: Interleaved Token Sequence',
            code: `User input:
  [Text: "What is in this image?"]
  [Image: <image_tokens>]

Model processes as unified sequence:
  [T1, T2, ..., Tn, <IMG_START>, I1, I2, ..., Ik, <IMG_END>, ...]

Self-attention operates across ALL tokens:
  A = softmax(QKᵀ / √d) V

  Q, K, V computed from both text and image tokens

Output:
  [Text: "It shows a sunset over mountains."]`,
            output: 'Unified sequence modeling enables true multimodal reasoning.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Text-only dialogue vs multimodal dialogue systems.',
          table: {
            headers: [
              'Aspect',
              'Text-Only Dialogue',
              'Multimodal Dialogue'
            ],
            rows: [
              [
                'Input',
                'Text only',
                'Text, image, audio, video, docs'
              ],
              [
                'Context window',
                'Text tokens only',
                'Interleaved text + visual tokens'
              ],
              [
                'Understanding',
                'Language only',
                'Grounded in real-world visuals'
              ],
              [
                'Response',
                'Text only',
                'Text, images, audio, or mixed'
              ],
              [
                'Use case',
                'Chatbots',
                'Visual assistants, embodied AI'
              ],
              [
                'Architecture',
                'Transformer decoder',
                'Any-to-any transformer (e.g., Chameleon, Gemini)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating image understanding as an add-on module rather than integrated reasoning (fix: use interleaved token sequences with unified self-attention so the model reasons jointly across modalities)',
            'Mistake 2: Expecting the model to perfectly understand spatial relationships from images (fix: prompt explicitly with spatial cues like "top-left" or "next to"; model spatial reasoning remains limited)',
            'Mistake 3: Not handling token budget carefully when mixing modalities (fix: images consume many tokens; use efficient visual encoders or patch compression to stay within context limits)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multimodal dialogue systems are enabling richer human-computer interaction.',
          list: [
            'Customer support: users upload photos of broken products and describe issues in text or voice',
            'Education: students ask questions about diagrams, equations, and illustrations in real time',
            'Healthcare: patients describe symptoms verbally while sharing images of affected areas',
            'Smart homes: voice + gesture commands to control devices more naturally'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal dialogue systems converse using text, images, audio, and video together',
            'Unified any-to-any transformers process interleaved tokens with shared self-attention',
            'Image tokens consume significant context budget; efficient encoders are critical',
            'Spatial reasoning in vision-language models is still an active research challenge',
            'Multimodal dialogue is the foundation for next-generation assistants and embodied AI'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key architectural difference between text-only and multimodal dialogue models?\nAns: Multimodal models process interleaved text and visual tokens through unified self-attention, rather than using separate vision and language modules.',
            'Q2: Why do images consume more context budget than text in dialogue systems?\nAns: Each image is split into many patch tokens (e.g., 256 or 1024 tokens), whereas a sentence may use only 20–50 text tokens.',
            'Q3: What is a common limitation of current multimodal dialogue models regarding images?\nAns: Fine-grained spatial reasoning (e.g., precise object locations and relationships) remains challenging and often requires explicit prompting.'
          ]
        }
      ]
    }
  }
};
