export const multimodalUnit4Content = {
  unit4: {
    transformer: {
      title: 'Transformers in Multimodal Learning',
      subtitle: 'Attention-based architectures for cross-modal understanding',
      sections: [
        {
          heading: 'What is a Transformer?',
          text: 'The <strong>Transformer</strong> is a deep learning architecture based entirely on <strong>self-attention</strong> mechanisms, eliminating recurrence and convolution. It processes sequences in parallel, making it highly scalable and effective for multimodal tasks where alignment between modalities is critical.',
          list: [
            'Self-attention: computes relationships between all positions simultaneously',
            'Parallel processing: faster training than RNNs on modern hardware',
            'Scalable to very large models (billions of parameters)',
            'Natural fit for multimodal: cross-attention layers can align text, image, and audio'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Scaled dot-product attention is the core operation.',
          example: {
            title: 'Example: Self-Attention Computation',
            code: `Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V

Where:
  Q = Query matrix (what am I looking for?)
  K = Key matrix (what do I contain?)
  V = Value matrix (what information do I provide?)
  dₖ = dimension of key vectors

Cross-modal attention (text → image):
  Q = text embeddings
  K, V = image patch embeddings

Result: text attends to relevant image regions`,
            output: 'Attention weights reveal which input positions influence each output position.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Transformer vs RNN for multimodal tasks.',
          table: {
            headers: ['Aspect', 'RNN/LSTM', 'Transformer'],
            rows: [
              ['Processing', 'Sequential (step-by-step)', 'Parallel (all at once)'],
              ['Long-range dependencies', 'Poor (vanishing gradient)', 'Excellent (direct attention)'],
              ['Training speed', 'Slow (cannot parallelize)', 'Fast (fully parallelizable)'],
              ['Multimodal alignment', 'Via bottleneck vector', 'Via cross-attention layers'],
              ['Position encoding', 'Implicit (recurrence)', 'Explicit (sinusoidal or learned)'],
              ['Best for', 'Short sequences', 'Long sequences, multimodal fusion']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using self-attention only instead of cross-attention for multimodal fusion (fix: use cross-attention layers where one modality queries another)',
            'Mistake 2: Ignoring positional encoding for non-sequential modalities like images (fix: add 2D positional encodings or use learned positional embeddings for image patches)',
            'Mistake 3: Assuming quadratic attention cost is always prohibitive (fix: use efficient variants like linear attention, sparse attention, or windowed attention for long sequences)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Transformers power the most advanced multimodal systems today.',
          list: [
            'CLIP: aligns image and text embeddings using dual transformers for zero-shot classification',
            'ViLBERT: uses co-attentional transformer layers for visual question answering',
            'DALL-E: generates images from text prompts using transformer-based autoregressive modeling',
            'GPT-4V: processes both images and text in a unified transformer architecture for reasoning'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transformer = attention-only architecture with no recurrence or convolution',
            'Self-attention computes all pairwise relationships in parallel using Q, K, V matrices',
            'Cross-attention enables one modality to attend to another (e.g., text to image)',
            'Positional encoding injects sequence order information since there is no recurrence',
            'Transformers dominate multimodal AI due to their scalability and natural cross-modal alignment'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the three matrices used in attention, and what do they represent?\nAns: Query (what to look for), Key (what is available), Value (what information to retrieve).',
            'Q2: Why is the transformer better than RNN for long multimodal sequences?\nAns: Attention provides direct connections between any two positions, avoiding the vanishing gradient problem of recurrent propagation.',
            'Q3: How does cross-attention differ from self-attention in a multimodal model?\nAns: In cross-attention, queries come from one modality while keys and values come from another, enabling alignment between different data types.'
          ]
        }
      ]
    },
    bert: {
      title: 'BERT for Multimodal Understanding',
      subtitle: 'Bidirectional text encoders in cross-modal systems',
      sections: [
        {
          heading: 'What is BERT?',
          text: '<strong>BERT (Bidirectional Encoder Representations from Transformers)</strong> is a pretrained transformer encoder that captures deep bidirectional context from text. In multimodal systems, BERT provides powerful text representations that can be fused with visual or audio features for tasks like image captioning and visual question answering.',
          list: [
            'Bidirectional: reads text left-to-right and right-to-left simultaneously',
            'Pretrained on masked language modeling and next-sentence prediction',
            'Produces rich contextual embeddings for each token',
            'Fine-tuned for downstream multimodal tasks with minimal task-specific architecture changes'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Masked language modeling pretraining objective.',
          example: {
            title: 'Example: MLM Pretraining',
            code: `Input: "The [MASK] sat on the mat"

True token: "cat"

BERT prediction:
  P("cat" | context) = 0.78
  P("dog" | context) = 0.15
  P("hat" | context) = 0.05

Loss:
  L = -log P("cat") = -log(0.78) = 0.25

Bidirectional context allows BERT to
use both left and right words to
predict the masked token.`,
            output: 'MLM forces BERT to learn deep contextual relationships.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'BERT vs GPT for multimodal tasks.',
          table: {
            headers: ['Aspect', 'BERT (Encoder)', 'GPT (Decoder)'],
            rows: [
              ['Architecture', 'Transformer encoder (bidirectional)', 'Transformer decoder (autoregressive)'],
              ['Context', 'Full bidirectional context', 'Left context only'],
              ['Pretraining task', 'Masked language modeling', 'Next token prediction'],
              ['Best for', 'Understanding, classification, encoding', 'Generation, completion'],
              ['In multimodal', 'Text encoder for retrieval/VQA', 'Caption generation, text synthesis'],
              ['Fine-tuning', 'Add task-specific head', 'Prompt or continue pretraining']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using BERT as a decoder for text generation (fix: BERT is an encoder-only model; use GPT, T5, or BART for generation tasks)',
            'Mistake 2: Treating the [CLS] token embedding as a universal sentence representation without fine-tuning (fix: fine-tune on your specific task or use sentence-BERT for semantic similarity)',
            'Mistake 3: Not truncating or padding multimodal inputs correctly when combining BERT with vision encoders (fix: ensure token lengths match the model\'s max position embeddings, typically 512)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'BERT variants are widely used in multimodal pipelines.',
          list: [
            'ViLBERT and LXMERT: combine BERT with visual encoders for visual question answering and image-text retrieval',
            'mBERT: multilingual BERT enables cross-lingual multimodal retrieval without language-specific training',
            'CLIP-style models: use a BERT-like text encoder aligned with image embeddings for zero-shot classification',
            'VideoBERT: extends BERT to video by tokenizing visual content alongside text for video understanding'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BERT = Bidirectional Encoder Representations from Transformers',
            'Pretrained with masked language modeling and next-sentence prediction',
            'Bidirectional context makes it powerful for understanding tasks',
            'In multimodal systems, BERT serves as the text encoder component',
            'Encoder-only: great for understanding, not for generation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What makes BERT "bidirectional" compared to GPT?\nAns: BERT attends to both left and right context simultaneously, while GPT only uses left (previous) context.',
            'Q2: What is the purpose of the [CLS] token in BERT?\nAns: The [CLS] token\'s final hidden state is used as an aggregate sequence representation for classification tasks.',
            'Q3: Why is BERT preferred over GPT as a text encoder in multimodal retrieval?\nAns: BERT\'s bidirectional context captures richer semantic meaning, producing better text embeddings for alignment with visual features.'
          ]
        }
      ]
    },
    vqa: {
      title: 'Visual Question Answering (VQA)',
      subtitle: 'Answering natural language questions about images',
      sections: [
        {
          heading: 'What is VQA?',
          text: '<strong>Visual Question Answering (VQA)</strong> is a multimodal task that requires understanding both an image and a natural language question to produce a correct answer. It tests a model\'s ability to perform visual recognition, reasoning, and language understanding jointly.',
          list: [
            'Input: an image + a natural language question',
            'Output: a natural language answer (classification over answer vocabulary)',
            'Requires visual understanding, language parsing, and cross-modal reasoning',
            'Evaluated on datasets like VQA v2, GQA, and VizWiz'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The core VQA pipeline fuses visual and textual representations.',
          example: {
            title: 'Example: VQA Architecture',
            code: `Image → [CNN/ViT] → v = [512-d visual features]
Question → [BERT/RNN] → q = [512-d text features]

Fusion:
  z = tanh(Wᵥ·v + W_q·q + b)  [element-wise or attention]

Classifier:
  P(answer | image, question) = softmax(W_out · z)

Top prediction selected from
predefined answer vocabulary.`,
            output: 'Fusion quality determines how well visual and textual information interact.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'VQA vs image captioning.',
          table: {
            headers: ['Aspect', 'VQA', 'Image Captioning'],
            rows: [
              ['Input', 'Image + question', 'Image only'],
              ['Output', 'Specific answer', 'Descriptive sentence'],
              ['Reasoning type', 'Targeted (question-guided)', 'Open-ended (holistic description)'],
              ['Evaluation', 'Accuracy against ground truth', 'BLEU, CIDEr, SPICE metrics'],
              ['Model focus', 'Cross-modal alignment for specific query', 'Unidirectional image-to-text generation'],
              ['Use case', 'Visual assistants, accessibility', 'Image indexing, social media alt-text']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using simple concatenation of image and text features without interaction (fix: use attention-based fusion, bilinear pooling, or co-attention to enable deep cross-modal interaction)',
            'Mistake 2: Treating VQA as purely classification without considering compositional reasoning (fix: use modular networks or neural module networks that break questions into executable sub-tasks)',
            'Mistake 3: Ignoring answer bias in datasets (fix: balance datasets or use bias-reduction techniques; many models exploit language priors instead of true visual reasoning)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'VQA enables interactive visual understanding systems.',
          list: [
            'Assistive technology for visually impaired users: describe surroundings and answer questions about objects',
            'Medical diagnosis support: answer clinician questions about X-rays, CT scans, or pathology slides',
            'Autonomous vehicles: answer passenger questions about detected road conditions or navigation',
            'Education: interactive textbooks where students ask questions about diagrams and illustrations'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'VQA = Visual Question Answering: answer questions about images',
            'Requires joint understanding of vision and language',
            'Core challenge: fusing visual and textual representations effectively',
            'Attention and co-attention mechanisms improve cross-modal reasoning',
            'Bias in datasets is a major challenge — models often exploit language priors'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the two main inputs to a VQA system?\nAns: An image and a natural language question.',
            'Q2: Why is simple feature concatenation insufficient for VQA?\nAns: It does not allow deep interaction between modalities; attention-based fusion enables the model to focus on relevant image regions for each question.',
            'Q3: What is the "language prior" problem in VQA?\nAns: Datasets often have answer biases (e.g., "yes" is very common), so models learn to predict based on question text alone without actually looking at the image.'
          ]
        }
      ]
    },
    retrieval: {
      title: 'Cross-Modal Retrieval',
      subtitle: 'Finding data across modalities using semantic similarity',
      sections: [
        {
          heading: 'What is Cross-Modal Retrieval?',
          text: '<strong>Cross-modal retrieval</strong> is the task of searching for content in one modality using a query from another modality. Examples include retrieving images from text descriptions, finding text from images, or matching audio to video segments.',
          list: [
            'Image-to-text: find captions or documents describing an image',
            'Text-to-image: find images matching a text query',
            'Audio-to-video: locate video segments containing a specific sound',
            'Requires a shared embedding space where all modalities are comparable'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Contrastive learning aligns embeddings from different modalities.',
          example: {
            title: 'Example: Contrastive Loss (CLIP-style)',
            code: `Given N (image, text) pairs:

Image embeddings: I = [i₁, i₂, ..., iₙ]
Text embeddings:  T = [t₁, t₂, ..., tₙ]

Similarity matrix:
  Sᵢⱼ = (iᵢ · tⱼ) / (||iᵢ|| · ||tⱼ||)

Loss for image i:
  Lᵢ = -log(exp(Sᵢᵢ / τ) / Σⱼ exp(Sᵢⱼ / τ))

Similarly for text j.

Total loss = (L_image + L_text) / 2`,
            output: 'Positive pairs are pulled together; negatives are pushed apart in the shared space.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Single-modal vs cross-modal retrieval.',
          table: {
            headers: ['Aspect', 'Single-Modal Retrieval', 'Cross-Modal Retrieval'],
            rows: [
              ['Query modality', 'Same as target (text→text)', 'Different from target (text→image)'],
              ['Embedding space', 'One encoder type', 'Multiple encoders + alignment'],
              ['Training data', 'Pairs within one modality', 'Aligned pairs across modalities'],
              ['Similarity metric', 'Cosine/Euclidean in one space', 'Cosine in shared space'],
              ['Challenge', 'Semantic gap within modality', 'Modality gap between representations'],
              ['Example', 'Google text search', 'Google image search from text']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training encoders independently without alignment constraints (fix: use joint training with contrastive, triplet, or CCA loss to enforce cross-modal similarity)',
            'Mistake 2: Using Euclidean distance without normalization in high dimensions (fix: use cosine similarity or L2-normalized embeddings; angular distance is more robust for retrieval)',
            'Mistake 3: Ignoring the hard negative mining problem (fix: sample difficult negatives during training — random negatives are too easy and do not improve the embedding quality)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Cross-modal retrieval powers modern search and recommendation systems.',
          list: [
            'Google Images: text queries retrieve semantically relevant images via joint embedding spaces',
            'E-commerce: find products by uploading a photo (visual search) or describing them (text search)',
            'Content moderation: retrieve similar images from text descriptions of prohibited content',
            'Video platforms: search video clips by audio query (e.g., find videos containing a specific song or sound)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Cross-modal retrieval = search content in one modality using a query from another',
            'Requires a shared embedding space where different modalities are comparable',
            'Contrastive learning (e.g., CLIP) is the dominant training approach',
            'Cosine similarity is the standard metric in the aligned space',
            'Hard negative mining is essential for learning high-quality cross-modal embeddings'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main challenge in cross-modal retrieval compared to single-modal retrieval?\nAns: The modality gap — different data types have fundamentally different representations that must be aligned into a shared space.',
            'Q2: Why is cosine similarity preferred over Euclidean distance for retrieval?\nAns: Cosine similarity measures angular alignment and is invariant to vector magnitude, making it more robust for comparing normalized embeddings.',
            'Q3: What is the role of temperature (τ) in contrastive loss?\nAns: Temperature scales the similarity scores; lower values sharpen the distribution, making the model focus more on hard negatives.'
          ]
        }
      ]
    },
    sentiment: {
      title: 'Multimodal Sentiment Analysis',
      subtitle: 'Detecting emotion and opinion from multiple channels',
      sections: [
        {
          heading: 'What is Multimodal Sentiment Analysis?',
          text: '<strong>Multimodal sentiment analysis</strong> predicts emotional state or opinion by combining information from multiple channels — typically text, audio (prosody, tone), and video (facial expressions, gestures). It recognizes that human emotion is expressed through multiple complementary signals.',
          list: [
            'Text: lexical sentiment, sarcasm, negation',
            'Audio: pitch, energy, speaking rate, voice quality',
            'Video: facial expressions, head movements, eye contact',
            'Combining modalities improves robustness over any single channel'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Late fusion with learned modality weights.',
          example: {
            title: 'Example: Weighted Multimodal Sentiment Fusion',
            code: `Text sentiment score:    s_t = 0.72 (positive)
Audio sentiment score:   s_a = 0.45 (neutral)
Visual sentiment score:    s_v = 0.85 (positive)

Learned weights:
  w_t = 0.5, w_a = 0.2, w_v = 0.3

Fused score:
  s_fused = w_t·s_t + w_a·s_a + w_v·s_v
          = 0.5(0.72) + 0.2(0.45) + 0.3(0.85)
          = 0.36 + 0.09 + 0.255
          = 0.705 → Positive`,
            output: 'Text carries highest weight; visual confirms; audio is ambiguous.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Unimodal vs multimodal sentiment analysis.',
          table: {
            headers: ['Aspect', 'Text-Only', 'Audio-Only', 'Multimodal'],
            rows: [
              ['Input', 'Words and punctuation', 'Speech signal', 'Text + audio + video'],
              ['Sarcasm detection', 'Difficult', 'Possible (tone)', 'Best (tone + facial)'],
              ['Context needed', 'Linguistic', 'Acoustic', 'Full behavioral context'],
              ['Robustness', 'Low (misses non-verbal)', 'Low (misses words)', 'High (redundancy)'],
              ['Accuracy', '~70%', '~65%', '~85%'],
              ['Use case', 'Social media posts', 'Call center audio', 'Interview/video analysis']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming modalities are always aligned in time (fix: use attention mechanisms or alignment networks to handle temporal misalignment between speech and facial expressions)',
            'Mistake 2: Using the same model architecture for all modalities (fix: modality-specific encoders are essential — CNN for faces, RNN/Transformer for text, spectrogram CNNs for audio)',
            'Mistake 3: Ignoring modality dropout during training (fix: randomly drop modalities during training to ensure the model learns robust fusion and does not over-rely on any single channel)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multimodal sentiment analysis powers emotion-aware systems.',
          list: [
            'Customer service: analyze caller tone, facial expressions, and word choice to escalate frustrated customers',
            'Mental health screening: detect depression or anxiety from speech patterns, facial expressions, and text responses',
            'Market research: gauge authentic consumer reactions to advertisements by combining facial emotion, voice tone, and survey text',
            'Human-robot interaction: enable robots to recognize human emotional states and respond appropriately'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal sentiment = predicting emotion from text + audio + video combined',
            'Each modality captures different emotional signals: text (words), audio (tone), video (face)',
            'Fusion strategies: early fusion, late fusion, and attention-based fusion',
            'Sarcasm and subtle emotions require multimodal cues — single modalities often fail',
            'Temporal alignment and modality dropout are key training considerations'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does multimodal sentiment analysis outperform text-only sentiment analysis?\nAns: Non-verbal cues (tone of voice, facial expressions) provide critical emotional context that text alone cannot capture.',
            'Q2: What is the advantage of randomly dropping modalities during training?\nAns: It prevents the model from over-relying on any single modality and ensures robust performance when one channel is missing or noisy.',
            'Q3: Why is sarcasm particularly difficult for text-only sentiment models?\nAns: Sarcasm often relies on tonal contrast or facial expressions that contradict the literal meaning of words.'
          ]
        }
      ]
    },
    'speech-recognition': {
      title: 'Multimodal Speech Recognition',
      subtitle: 'Robust ASR using audio and visual speech cues',
      sections: [
        {
          heading: 'What is Multimodal Speech Recognition?',
          text: '<strong>Multimodal speech recognition</strong>, also called Audio-Visual Speech Recognition (AVSR), combines audio signals with visual lip movements to transcribe spoken language. Visual cues compensate when audio is noisy, making the system robust to real-world acoustic conditions.',
          list: [
            'Audio input: spectrograms or raw waveform',
            'Visual input: lip region video or facial landmarks',
            'Fusion: early, late, or attention-based combination',
            'Particularly effective in noisy environments where audio-only ASR fails'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Attention-based fusion dynamically weights modalities based on audio quality.',
          example: {
            title: 'Example: Adaptive AVSR Fusion',
            code: `Audio features: a_t (at time t)
Visual features: v_t (at time t)

Audio quality estimate:
  SNR_est = audio_snr_predictor(a_t)

Attention weights:
  α_audio = σ(W · SNR_est + b)
  α_visual = 1 - α_audio

Fused feature:
  f_t = α_audio · a_t + α_visual · v_t

Clean audio (SNR=30dB):
  α_audio ≈ 0.95, α_visual ≈ 0.05

Noisy audio (SNR=5dB):
  α_audio ≈ 0.20, α_visual ≈ 0.80`,
            output: 'The model automatically trusts visual cues more when audio is degraded.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Audio-only ASR vs audio-visual ASR.',
          table: {
            headers: ['Aspect', 'Audio-Only ASR', 'Audio-Visual ASR'],
            rows: [
              ['Input', 'Audio waveform/spectrogram', 'Audio + video of speaker'],
              ['Clean speech accuracy', '~98%', '~98%'],
              ['Noisy speech accuracy', '~30% (SNR=5dB)', '~85% (SNR=5dB)'],
              ['Computational cost', 'Moderate', 'Higher (video processing)'],
              ['Privacy concern', 'Audio only', 'Requires camera access'],
              ['Use case', 'Dictation, voice assistants', 'Noisy environments, accessibility']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Concatenating audio and visual features without temporal alignment (fix: ensure frame-level synchronization between audio spectrograms and video frames; use DTW or attention alignment if needed)',
            'Mistake 2: Using full face video instead of cropped lip regions (fix: crop and normalize the mouth region; the rest of the face provides minimal phonetic information and adds noise)',
            'Mistake 3: Ignoring speaker identity in multi-speaker scenarios (fix: use speaker embeddings or diarization to associate visual and audio streams with the correct speaker)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'AVSR enables reliable speech recognition in challenging acoustic conditions.',
          list: [
            'Airport/train station announcements: transcribe public address systems in highly reverberant, noisy environments',
            'Video conferencing: improve transcription accuracy when participants have poor microphone quality or background noise',
            'Accessibility for hearing-impaired: provide real-time captions by leveraging both audio and visual speech cues',
            'In-car voice assistants: maintain reliable speech recognition despite road noise, wind, and engine sounds'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AVSR = Audio-Visual Speech Recognition: fuses audio and lip video for transcription',
            'Visual lip-reading compensates for audio degradation in noisy environments',
            'Attention-based fusion dynamically adjusts modality weights based on audio quality',
            'Temporal alignment between audio frames and video frames is critical',
            'Lip region cropping improves visual feature quality and reduces noise'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does AVSR outperform audio-only ASR in noisy restaurants?\nAns: Visual lip-reading provides complementary phonetic information that is unaffected by acoustic noise.',
            'Q2: What is the purpose of the audio quality estimator in adaptive fusion?\nAns: It predicts the reliability of the audio stream so the model can dynamically weight audio vs visual features.',
            'Q3: Why is it important to crop the lip region rather than use the full face?\nAns: The mouth region contains the phonetic information; the rest of the face adds irrelevant data and computational overhead.'
          ]
        }
      ]
    },
    'text-to-speech': {
      title: 'Text-to-Speech (TTS) in Multimodal Systems',
      subtitle: 'Synthesizing natural speech from text with contextual awareness',
      sections: [
        {
          heading: 'What is Text-to-Speech?',
          text: '<strong>Text-to-Speech (TTS)</strong> converts written text into natural-sounding spoken audio. Modern neural TTS systems use deep learning to produce highly natural speech. In multimodal contexts, TTS can be conditioned on visual or emotional context to generate speech that matches the scene or speaker expression.',
          list: [
            'Input: text (with optional style, emotion, or speaker conditioning)',
            'Output: raw audio waveform or spectrogram',
            'Modern approaches: Tacotron, WaveNet, FastSpeech, VITS',
            'Multimodal extensions: visual-conditioned TTS, emotional TTS, speaker cloning'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The VITS (Variational Inference with adversarial learning) end-to-end TTS objective.',
          example: {
            title: 'Example: VITS Architecture',
            code: `Text → [Encoder] → Hidden states
  ↓
[Duration Predictor] → Phoneme durations
  ↓
[Upsampling] → Aligned hidden states
  ↓
[Flow] → Latent z (variational)
  ↓
[Decoder] → Spectrogram
  ↓
[Vocoder (HiFi-GAN)] → Waveform

Loss = Reconstruction + KL + Adversarial

Result: natural, real-time speech
with controllable prosody.`,
            output: 'VITS combines variational inference and GANs for high-quality end-to-end synthesis.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Traditional vs neural TTS.',
          table: {
            headers: ['Aspect', 'Traditional TTS', 'Neural TTS'],
            rows: [
              ['Approach', 'Concatenative or parametric', 'End-to-end deep learning'],
              ['Naturalness', 'Robotic, artifact-prone', 'Highly natural, human-like'],
              ['Training data', 'Small (phoneme database)', 'Large (hours of audio)'],
              ['Speed', 'Fast (lookup-based)', 'Slower (neural generation)'],
              ['Flexibility', 'Limited voices/styles', 'Speaker/style conditioning'],
              ['Multimodal', 'None', 'Visual/emotion conditioning possible']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training on clean studio audio and deploying in noisy environments (fix: use audio augmentation during training; add background noise, reverberation, and compression artifacts to improve generalization)',
            'Mistake 2: Ignoring the alignment problem between text and audio (fix: use attention-based aligners, duration predictors, or monotonic alignment training to ensure phonemes map correctly to audio frames)',
            'Mistake 3: Using the same prosody for all sentences regardless of context (fix: incorporate prosody predictors or condition on emotion embeddings; multimodal TTS can use visual context to infer appropriate intonation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'TTS powers voice interfaces and content creation across industries.',
          list: [
            'Virtual assistants: Siri, Alexa, and Google Assistant use neural TTS for natural responses',
            'Accessibility: screen readers and reading aids for visually impaired users',
            'Dubbing and localization: synthesize localized speech in multiple languages while preserving speaker characteristics',
            'Multimodal avatars: virtual presenters that generate speech matching their facial expressions and lip movements in real-time'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'TTS converts text into natural speech using neural networks',
            'Modern systems (Tacotron, VITS, FastSpeech) are end-to-end and highly natural',
            'Duration prediction and text-audio alignment are core technical challenges',
            'Multimodal TTS conditions on visual or emotional context for richer synthesis',
            'Speaker conditioning enables voice cloning and multi-speaker systems'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the alignment problem in TTS, and how is it solved?\nAns: Mapping text phonemes to audio frames is non-trivial; solved with attention mechanisms, duration predictors, or monotonic alignment constraints.',
            'Q2: Why is VITS considered an end-to-end TTS model?\nAns: VITS goes directly from text to raw waveform in a single pipeline, combining text encoding, variational modeling, and neural vocoding.',
            'Q3: How can TTS benefit from multimodal conditioning?\nAns: Visual context (e.g., a sad scene) or emotion embeddings can condition the prosody and tone of generated speech to match the situation.'
          ]
        }
      ]
    },
    'modality-spectrum': {
      title: 'The Modality Spectrum',
      subtitle: 'Understanding different data types in multimodal systems',
      sections: [
        {
          heading: 'What is the Modality Spectrum?',
          text: 'Multimodal machine learning works with <strong>multiple types of data</strong>, each with its own characteristics and processing requirements. Understanding the modality spectrum is essential for designing effective fusion and alignment strategies.',
          list: [
            'Text: discrete tokens with semantic richness and sequential structure',
            'Audio: waveforms and spectrograms with temporal patterns and frequency content',
            'Image: 2D pixel arrays with spatial correlations, texture, and color',
            'Video: sequences of frames combining spatial and temporal pixel correlations',
            'Sensors: numeric streams from LiDAR, IMU, GPS, and other IoT devices'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Each modality requires domain-specific preprocessing before fusion.',
          example: {
            title: 'Example: Feature dimensions per modality',
            code: 'Text:   "The patient felt better"\n        → Tokenize → [101, 2023, 4693, 2589, 2456, 102]\n        → BERT embedding → 768-dim vector\n\nAudio:  3-second speech clip\n        → Spectrogram (128 mel bins × 300 frames)\n        → CNN encoder → 512-dim vector\n\nImage:  224×224 RGB photo\n        → ResNet50 → 2048-dim vector\n\nFusion: Concatenate [768 + 512 + 2048] = 3328-dim → MLP',
            output: 'Different modalities produce different feature dimensionalities and require domain-specific encoders.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing modalities by their inherent properties.',
          table: {
            headers: ['Modality', 'Raw Form', 'Key Characteristics', 'Processing Domain'],
            rows: [
              ['Text', 'Discrete tokens', 'Semantic richness, sequential structure', 'NLP'],
              ['Audio', 'Waveforms, spectrograms', 'Temporal patterns, prosody, frequency', 'Speech Processing'],
              ['Image', '2D pixel arrays', 'Spatial correlations, texture, color', 'Computer Vision'],
              ['Video', 'Frame sequences', 'Spatial + temporal correlations', 'Video Understanding'],
              ['Sensors', 'Numeric streams', 'LiDAR, IMU, GPS, heat maps', 'Robotics / IoT']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating all modalities identically (fix: text needs tokenization and embedding, audio needs spectrogram transformation, images need CNN feature extraction — each modality requires domain-specific preprocessing before any fusion)',
            'Mistake 2: Ignoring sampling rate mismatches (fix: audio at 16kHz, video at 30fps, and text at arbitrary intervals have different temporal resolutions; align them through interpolation, attention, or windowing before fusion)',
            'Mistake 3: Using the same encoder for all modalities (fix: a Transformer encoder works well for text but may not capture 2D spatial structure in images; use ViT for images, wav2vec for audio, and BERT for text)',
            'Mistake 4: Forgetting sensor calibration (fix: different sensors have different scales, units, and noise characteristics; normalize and calibrate sensor inputs before feeding them into shared fusion layers)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'The modality spectrum defines the input space for all multimodal AI systems.',
          list: [
            'Autonomous driving: fuses camera (vision), LiDAR (3D geometry), radar (velocity), and GPS (location) for robust perception',
            'Medical diagnosis: combines medical images (X-rays, MRIs), clinical notes (text), and lab results (structured data) into a unified patient profile',
            'Smart homes: integrates camera, microphone, motion sensors, and temperature readings for context-aware automation',
            'Virtual assistants: processes speech (audio), visual context (camera), and text commands for natural interaction'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'The modality spectrum covers text, audio, image, video, and sensor data',
            'Each modality has unique characteristics requiring domain-specific preprocessing',
            'Sampling rate and temporal alignment are critical challenges',
            'Use modality-specific encoders (BERT, ViT, wav2vec) before fusion',
            'Sensor calibration and normalization are essential for numeric sensor data'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why can the same neural architecture not process text, images, and audio without modification?\nAns: Each modality has fundamentally different structure — text is sequential discrete tokens, images are 2D spatial grids, and audio is 1D temporal waveforms — requiring domain-specific preprocessing and encoders.',
            'Q2: What is the temporal alignment challenge in multimodal video analysis?\nAns: Audio is sampled at 16kHz (many frames per second), video at 30fps, and text captions appear at arbitrary intervals; these must be synchronized before joint processing.',
            'Q3: Why is sensor calibration important in robotics multimodal systems?\nAns: Different sensors (LiDAR, IMU, GPS) have different units, scales, and noise levels; without calibration, one sensor may dominate or corrupt the fused representation.'
          ]
        }
      ]
    },
    'representation-alignment': {
      title: 'Representation \u0026 Alignment',
      subtitle: 'Mapping and linking information across modalities',
      sections: [
        {
          heading: 'What is Representation \u0026 Alignment?',
          text: '<strong>Representation</strong> converts raw modality data into vector embeddings. <strong>Alignment</strong> finds correspondence between elements across modalities — perhaps the hardest part of multimodal AI. Without proper alignment, a model cannot relate "the red ball" in text to the red circular region in an image.',
          list: [
            'Joint representations: map all modalities into a single shared vector space',
            'Coordinated representations: keep separate spaces but enforce structural similarity',
            'Explicit alignment: directly match parts of data (e.g., phrase to bounding box)',
            'Implicit alignment: learn attention-based correspondence without explicit supervision'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Contrastive alignment pulls matched pairs together and pushes unmatched pairs apart in embedding space.',
          example: {
            title: 'Example: CLIP-style contrastive alignment',
            code: 'Image encoder: img → z_img ∈ ℝ⁵¹²\nText encoder:  txt → z_txt ∈ ℝ⁵¹²\n\nMatched pair (positive):\n  sim(z_img, z_txt) = 0.95  (high)\n\nUnmatched pair (negative):\n  sim(z_img, z_txt_rand) = 0.08  (low)\n\nContrastive loss:\n  L = -log(exp(sim/τ) / Σ exp(sim/τ))\n\nResult: after training, matched image-text pairs\nare neighbors in the shared embedding space.',
            output: 'Alignment creates a shared semantic space where related items from different modalities are close together.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing representation and alignment strategies.',
          table: {
            headers: ['Strategy', 'Space', 'Alignment', 'Pros', 'Cons'],
            rows: [
              ['Joint', 'Single shared space', 'Implicit via proximity', 'Simple, one space', 'May lose modality-specific info'],
              ['Coordinated', 'Separate spaces', 'Structural similarity constraint', 'Preserves modality features', 'Requires coordination loss'],
              ['Explicit', 'Any', 'Direct element matching', 'Precise, interpretable', 'Expensive, needs labels'],
              ['Implicit', 'Any', 'Attention-based', 'Scalable, flexible', 'Less interpretable']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming joint representations preserve all modality information (fix: forcing all modalities into one space often discards modality-specific nuances; use coordinated representations when preserving domain-specific features matters)',
            'Mistake 2: Confusing explicit and implicit alignment (fix: explicit alignment needs labeled correspondences like bounding boxes for phrases; implicit alignment learns via attention but may attend to wrong regions — verify with human evaluation)',
            'Mistake 3: Expecting alignment without enough training data (fix: alignment requires seeing many paired examples; with limited data, pretrain on large aligned datasets like CC12M or LAION-5B before fine-tuning)',
            'Mistake 4: Ignoring fine-grained vs coarse alignment (fix: word-to-image-region alignment is fine-grained and harder than sentence-to-image alignment; choose the granularity that matches your task requirements)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Representation and alignment enable cross-modal search, retrieval, and understanding.',
          list: [
            'Visual grounding: aligning text phrases to image regions for referring expression comprehension (e.g., "the red ball" → bounding box)',
            'Cross-modal retrieval: searching images with text queries or finding text descriptions for images (CLIP, BLIP)',
            'Image captioning: generating natural language descriptions by aligning visual features to text generation via attention',
            'Audio-visual speech recognition: aligning lip movements (video) with phonemes (audio) to improve recognition in noisy environments'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Representation converts raw data to embeddings; alignment finds cross-modal correspondence',
            'Joint: one shared space; Coordinated: separate spaces with similarity constraints',
            'Explicit alignment: direct matching (needs labels); Implicit: attention-based (more scalable)',
            'Contrastive learning is the dominant training objective for alignment',
            'Choose granularity (coarse vs fine-grained) based on task requirements'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main drawback of joint representations compared to coordinated ones?\nAns: Joint representations force all modalities into a single space, which may cause modality-specific information to be lost or diluted.',
            'Q2: Why is explicit alignment considered computationally expensive?\nAns: It requires labeled correspondences between sub-elements across modalities (e.g., bounding boxes for text phrases), which are costly to annotate.',
            'Q3: How does implicit alignment differ from explicit alignment?\nAns: Implicit alignment learns correspondence through attention mechanisms without explicit supervision, making it more scalable but less interpretable.'
          ]
        }
      ]
    },
    'co-learning': {
      title: 'Co-Learning \u0026 Modality Relationships',
      subtitle: 'Transferring knowledge across modalities',
      sections: [
        {
          heading: 'What is Co-Learning?',
          text: '<strong>Co-learning</strong> allows a model to learn a task in one modality by leveraging labels or features from another modality. This is powerful when labeled data is scarce in one modality but abundant in another. The visual modality can act as a "teacher" for the audio modality, or vice versa.',
          list: [
            'Teacher-student paradigm: one modality provides supervision for another',
            'Cross-modal transfer: knowledge gained in one domain improves performance in another',
            'Complementary modalities: provide different, non-overlapping information about the same event',
            'Redundant modalities: provide overlapping information, increasing reliability'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Co-learning minimizes a joint loss that combines task performance in the target modality with alignment to the source modality.',
          example: {
            title: 'Example: Cross-modal teacher-student learning',
            code: 'Setup:\n  Large unlabeled video dataset (visual + audio)\n  Small labeled audio dataset (emotion labels)\n\nTeacher (Visual Encoder):\n  Pretrained on faces and lip movements\n  Learns to predict emotion from visual cues\n\nStudent (Audio Encoder):\n  Learns emotion classification from audio\n  + Alignment loss: audio embeddings ≈ visual embeddings\n\nJoint Loss:\n  L = L_audio_task + λ · ||z_audio - z_visual||²\n\nResult: audio model improves by leveraging\nvisual knowledge even without visual labels.',
            output: 'Co-learning transfers knowledge from a data-rich modality to a data-scarce modality.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing modality relationships and their implications.',
          table: {
            headers: ['Relationship', 'Definition', 'Effect', 'Example'],
            rows: [
              ['Complementary', 'Different, non-overlapping info', 'Increases context, enables disambiguation', 'Text says "happy", video shows smile, audio has laughter'],
              ['Redundant', 'Same or overlapping info', 'Increases reliability, robust to sensor failure', 'Audio says "stop" and red light also signals stop'],
              ['Independent', 'Unrelated information', 'No cross-modal benefit', 'Weather data + stock prices'],
              ['Conflicting', 'Contradictory signals', 'Requires conflict resolution', 'Positive text + negative tone (sarcasm)']
            ]
          }
        },
        {
          heading: 'Key Challenges ("Nightmare Scenarios")',
          list: [
            'Missing modality ("Broken Sensor"): one input modality is unavailable at test time. Solutions: modality dropout during training, cross-modal reconstruction, robust fusion strategies that gracefully degrade.',
            'Modality imbalance: one signal dominates during training (e.g., text is more informative than audio, so the model ignores audio). Solutions: gradient modulation, modality-specific learning rates, loss reweighting.',
            'Temporal alignment ("Lag Problem"): different modalities have different sampling rates (audio 16kHz, video 30fps, text arbitrary). Solutions: interpolation, attention mechanisms, learned alignment modules.',
            'Noisy modalities: low-quality input from one modality degrades the entire system. Solutions: gated fusion that dynamically down-weights unreliable modalities based on quality estimates.'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Co-learning powers systems that must work with limited labeled data or unreliable sensors.',
          list: [
            'Emotion recognition: visual facial expressions help train audio emotion models when audio labels are scarce',
            'Medical imaging: MRI (abundant) helps train PET (scarce) models through cross-modal transfer for tumor detection',
            'Autonomous driving: when camera fails (glare, fog), LiDAR and radar (redundant modalities) maintain safe operation',
            'Speech recognition in noise: lip-reading video (visual) supplements corrupted audio to maintain accuracy'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Co-learning transfers knowledge from data-rich to data-scarce modalities',
            'Complementary modalities add unique context; redundant modalities add reliability',
            'Missing modality, modality imbalance, temporal misalignment, and noise are key challenges',
            'Gated fusion and gradient modulation address imbalance and noise',
            'Teacher-student paradigm is the dominant co-learning framework'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does co-learning help when one modality has abundant unlabeled data but scarce labeled data?\nAns: The abundant modality (e.g., video) acts as a teacher, providing supervision through embedding alignment that helps the scarce modality (e.g., audio) learn better representations.',
            'Q2: What is the difference between complementary and redundant modalities?\nAns: Complementary modalities provide different information (each adds unique context); redundant modalities provide overlapping information (increases reliability when one fails).',
            'Q3: How can modality imbalance be addressed during training?\nAns: Through gradient modulation, modality-specific learning rates, or loss reweighting to prevent one dominant modality from suppressing the others.'
          ]
        }
      ]
    },
    'fusion-approaches': {
      title: 'Fusion Approaches',
      subtitle: 'Combining multimodal data at different levels',
      sections: [
        {
          heading: 'What are Fusion Approaches?',
          text: '<strong>Fusion</strong> is the process of combining information from multiple modalities to make a joint prediction. The choice of fusion strategy — early, intermediate, late, or hybrid — dramatically affects model performance, computational cost, and robustness to missing modalities.',
          list: [
            'Early fusion: concatenate raw features from all modalities at the input level',
            'Intermediate fusion: each modality gets its own encoder; embeddings are combined mid-network',
            'Late fusion: each modality gets its own complete model; predictions are combined at the output level',
            'Hybrid fusion: combines multiple strategies (hierarchical, parallel, gated) for best results'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Gated fusion dynamically weights modalities based on their estimated reliability.',
          example: {
            title: 'Example: Gated fusion in noisy car environment',
            code: 'Quality estimates:\n  q_audio = 0.2  (noisy car environment)\n  q_video = 0.9  (clear visual)\n  q_text  = 0.85 (clean transcript)\n\nGates (softmax over qualities):\n  g_audio = exp(0.2) / Σ exp(q) = 0.10\n  g_video = exp(0.9) / Σ exp(q) = 0.48\n  g_text  = exp(0.85) / Σ exp(q) = 0.42\n\nFused prediction:\n  y = g_audio · y_audio + g_video · y_video + g_text · y_text\n\nResult: video and text dominate; audio is suppressed.',
            output: 'Gated fusion automatically adapts to input quality, down-weighting unreliable modalities.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing fusion strategies by architecture, strengths, and weaknesses.',
          table: {
            headers: ['Strategy', 'Fusion Point', 'Pros', 'Cons', 'Best For'],
            rows: [
              ['Early Fusion', 'Input level (raw features)', 'Captures cross-modal interactions from start', 'Requires all modalities present', 'Small datasets, tight coupling'],
              ['Intermediate Fusion', 'Embedding level (mid-network)', 'Each encoder specializes; balanced interaction', 'More complex architecture', 'General multimodal tasks'],
              ['Late Fusion', 'Output level (predictions)', 'Simple; robust to missing modalities', 'Misses cross-modal interactions', 'When modalities are independent'],
              ['Hybrid Fusion', 'Multiple levels', 'Best of all strategies; adaptive', 'Most complex to implement', 'Production systems']
            ]
          }
        },
        {
          heading: 'Hybrid Fusion Variants',
          text: 'Advanced fusion strategies combine multiple approaches.',
          list: [
            'Hierarchical fusion: early-fuse some modalities to create mid-level features, then late-fuse with remaining modalities. Example: audio+video → early fusion → mid-level features + text → late fusion → prediction.',
            'Parallel fusion: run early-fusion and late-fusion branches simultaneously, then merge outputs. Branch A captures joint correlations; Branch B preserves signal integrity.',
            'Gated / adaptive fusion: uses a controller network to dynamically decide how much to fuse based on input quality. If audio is noisy, suppress early-fusion features and rely on late-fusion visual features.',
            'Attention-based fusion: learn which modalities to attend to for each sample, rather than using fixed weights.'
          ]
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Always using early fusion (fix: early fusion requires all modalities to be present and synchronized; if modalities may be missing at test time, late or hybrid fusion is more robust)',
            'Mistake 2: Ignoring modality-specific preprocessing (fix: fusing raw pixels with raw text tokens is ineffective; each modality needs domain-specific encoding before fusion)',
            'Mistake 3: Using fixed fusion weights (fix: static weights cannot adapt to changing input quality; use gated or attention-based fusion that learns dynamic weights per sample)',
            'Mistake 4: Assuming more modalities always help (fix: adding a noisy or irrelevant modality can hurt performance; always evaluate whether each modality improves the fused result)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Fusion strategies are the architectural backbone of all multimodal systems.',
          list: [
            'Video sentiment analysis: early fusion of text (transcript), audio (tone), and video (facial expressions) captures sarcasm that any single modality misses',
            'Autonomous driving: hierarchical hybrid — camera+LiDAR early-fused for 3D object detection, then combined with radar+GPS for path planning',
            'Medical diagnosis: late fusion of imaging (CNN), clinical notes (BERT), and lab results (MLP) allows diagnosis even when some tests are unavailable',
            'Smart homes: gated fusion of camera, microphone, and motion sensors dynamically adapts when one sensor is obstructed or fails'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Early fusion: concatenate raw features — captures interactions but requires all modalities',
            'Intermediate fusion: combine embeddings — balanced specialization and interaction',
            'Late fusion: combine predictions — robust to missing modalities but misses interactions',
            'Hybrid fusion: hierarchical, parallel, or gated — best for production systems',
            'Gated fusion dynamically weights modalities based on estimated reliability'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When should you prefer late fusion over early fusion?\nAns: When modalities may be missing at test time or when they are largely independent, since late fusion combines predictions and degrades gracefully when one modality is absent.',
            'Q2: What is the main advantage of gated fusion over fixed-weight fusion?\nAns: Gated fusion dynamically adjusts modality weights based on input quality, suppressing unreliable modalities and emphasizing reliable ones on a per-sample basis.',
            'Q3: How does hierarchical hybrid fusion work?\nAns: It early-fuses some modalities to create mid-level features, then combines those with remaining modalities at a later stage, creating a hierarchy of increasingly abstract multimodal representations.'
          ]
        }
      ]
    },
    'kernel-based-fusion': {
      title: 'Kernel-Based Fusion',
      subtitle: 'Non-linear multimodal integration with kernel methods',
      sections: [
        {
          heading: 'What is Kernel-Based Fusion?',
          text: '<strong>Kernel-based fusion</strong> uses kernel functions to map multimodal data into high-dimensional spaces where non-linear relationships become linearly separable. This approach is especially powerful when data is not linearly separable in its raw form, and it provides principled ways to combine heterogeneous modalities through <strong>Multiple Kernel Learning (MKL)</strong>.',
          list: [
            'Kernel trick: computes inner products in high-dimensional space without explicit mapping',
            'Modality-specific kernels: different kernel functions for text, image, and audio',
            'Multiple Kernel Learning (MKL): weighted combination of multiple kernels',
            'Kernel fusion types: early (composite kernels), intermediate (MKL), late (output score fusion)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'MKL learns a weighted combination of kernel matrices, one per modality.',
          example: {
            title: 'Example: MKL for multimodal emotion recognition',
            code: 'Modality kernels:\n  K_text = Linear kernel (bag-of-words)\n  K_audio = RBF kernel (spectral patterns)\n  K_face = Histogram Intersection (action units)\n\nWeighted fusion:\n  K_fused = α₁·K_text + α₂·K_audio + α₃·K_face\n\nLearned weights:\n  α₁ = 0.4  (text most informative)\n  α₂ = 0.35 (audio second)\n  α₃ = 0.25 (face third)\n\nSVM on K_fused:\n  f(x) = sign(Σᵢ αᵢ·yᵢ·K_fused(x, xᵢ) + b)\n\nResult: text dominates; all modalities contribute.',
            output: 'MKL automatically learns how much each modality contributes to the final decision.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing kernel fusion strategies.',
          table: {
            headers: ['Type', 'How It Works', 'Pros', 'Cons'],
            rows: [
              ['Early Kernel Fusion', 'Composite kernel over concatenated features', 'Captures cross-modal correlations', 'Requires all modalities present'],
              ['Intermediate MKL', 'Separate kernels per modality, then combine matrices', 'Different kernels per modality; most popular', 'Complex optimization'],
              ['Late Kernel Fusion', 'Separate SVMs per modality, fuse output scores', 'Robust to missing data', 'Misses cross-modal correlations']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the same kernel for all modalities (fix: text works well with linear kernels, images with RBF or histogram intersection, audio with spectral kernels; using one kernel type for all modalities hurts performance)',
            'Mistake 2: Ignoring kernel hyperparameter tuning (fix: RBF bandwidth and polynomial degree dramatically affect performance; use cross-validation or Bayesian optimization to tune kernel parameters)',
            'Mistake 3: Assuming MKL weights indicate modality importance (fix: MKL weights depend on kernel scale; a large weight on a narrow kernel does not necessarily mean that modality is more important)',
            'Mistake 4: Using kernel methods for very large datasets (fix: kernel SVMs scale as O(n²) or O(n³) in the number of samples; for datasets with >100K samples, use linear approximations or switch to neural network fusion)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Kernel-based fusion excels in domains with limited data and strong theoretical requirements.',
          list: [
            'Multimodal emotion recognition: MKL combines text (linear), audio (RBF), and facial features (histogram) for robust emotion classification with limited labeled data',
            'Medical diagnosis: kernel methods provide interpretable decision boundaries for fusing imaging, clinical notes, and lab results in small patient cohorts',
            'Brain-computer interfaces: kernel-based fusion of EEG, fMRI, and behavioral data for robust classification with very few samples per subject',
            'Financial forecasting: MKL fuses market data (linear), news sentiment (polynomial), and macroeconomic indicators (RBF) for interpretable prediction'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Kernel trick: implicit mapping to high-dimensional space for non-linear separability',
            'MKL: weighted combination of multiple kernels, one per modality',
            'Early kernel fusion: composite kernel; Intermediate MKL: separate + combine; Late: SVM outputs',
            'Different modalities need different kernel types (linear, RBF, histogram intersection)',
            'Kernel methods scale poorly to very large datasets — consider neural alternatives'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the kernel trick and why is it useful for multimodal fusion?\nAns: The kernel trick computes inner products in a high-dimensional feature space without explicit mapping, enabling non-linear classification while keeping computation tractable.',
            'Q2: What is the main advantage of Multiple Kernel Learning (MKL) over using a single kernel?\nAns: MKL can use different kernel types for different modalities (e.g., linear for text, RBF for audio) and learns optimal weights automatically, improving performance over a one-size-fits-all kernel.',
            'Q3: Why might kernel-based fusion be preferred over neural network fusion in some medical applications?\nAns: Medical datasets often have limited samples, and kernel methods with strong regularization provide more reliable generalization and interpretable decision boundaries than data-hungry neural networks.'
          ]
        }
      ]
    },
    'factorial-hmm': {
      title: 'Factorial Hidden Markov Models',
      subtitle: 'Modeling multiple hidden processes in multimodal data',
      sections: [
        {
          heading: 'What is a Factorial HMM?',
          text: 'A <strong>Factorial Hidden Markov Model (FHMM)</strong> extends the standard HMM to handle <strong>multiple independent hidden processes</strong> that jointly generate a single observation. Instead of modeling all possible combinations of states (which causes state explosion), FHMM represents each process as a separate parallel chain.',
          list: [
            'Standard HMM: one hidden chain with K states',
            'FHMM: M parallel chains, each with K states',
            'Observation is generated by all hidden chains combined',
            'Dramatic complexity reduction: from Kᴹ to M×K parameters'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'FHMM factorizes the hidden state into independent chains, each with its own transition matrix.',
          example: {
            title: 'Example: Health monitoring with two hidden chains',
            code: 'Hidden Chain 1 (Exertion):\n  States: Resting, Walking, Running\n  Transition: P(S₁ₜ | S₁ₜ₋₁)\n\nHidden Chain 2 (Emotion):\n  States: Calm, Anxious, Stressed\n  Transition: P(S₂ₜ | S₂ₜ₋₁)\n\nObservation (Heart Rate):\n  Oₜ = f(S₁ₜ, S₂ₜ) + noise\n\nExample inference:\n  Observed: 120 bpm (baseline 70)\n  Walking (20) + Stressed (30) = 120 ✓\n  Resting (0) + Stressed (30) = 100 ✗\n  Running (40) + Calm (0) = 110 ✗\n\nResult: most likely state = Walking + Stressed.',
            output: 'FHMM separates independent hidden processes and infers their joint state from observations.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'FHMM versus standard HMM for multimodal data.',
          table: {
            headers: ['Feature', 'Standard HMM', 'Factorial HMM'],
            rows: [
              ['Hidden chains', 'Single chain', 'Multiple parallel chains'],
              ['State space', 'K states', 'M × K states (not Kᴹ)'],
              ['Observation', 'Generated by single chain', 'Generated by all chains combined'],
              ['Scalability', 'State explosion with combinations', 'Linear growth with chains'],
              ['Best for', 'Single-source sequential data', 'Multi-source / multi-process data'],
              ['Key application', 'Speech recognition', 'Source separation (cocktail party)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using standard HMM for multi-source data (fix: standard HMM needs Kᴹ states to model M independent processes, causing state explosion; FHMM keeps M separate chains with K states each)',
            'Mistake 2: Assuming chains are truly independent (fix: FHMM assumes chains evolve independently; if processes interact strongly, the independence assumption breaks and FHMM underperforms — use coupled HMM instead)',
            'Mistake 3: Ignoring the observation model complexity (fix: the observation function f(S₁, S₂, ..., Sₘ) can be complex; linear additive models are common but may not capture interactions between hidden processes)',
            'Mistake 4: Using FHMM for real-time inference without approximation (fix: exact inference in FHMM is exponential in the number of chains; use variational approximations or message-passing algorithms for real-time applications)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'FHMM excels at separating mixed signals into independent sources.',
          list: [
            'Cocktail party problem: one microphone records multiple speakers simultaneously; FHMM models each speaker as an independent hidden chain and separates the mixed audio',
            'Biomedical signal analysis: separating cardiac and respiratory signals from a single ECG or phonocardiogram recording',
            'Financial time series: decomposing market data into independent trend and seasonal components for better forecasting',
            'Multimodal sensor fusion: separating temperature drift and true motion from noisy IMU sensors in robotics'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'FHMM = multiple independent hidden chains generating a joint observation',
            'Complexity: Kᴹ → M×K — dramatic reduction compared to standard HMM',
            'Each chain has its own transition matrix; chains evolve independently',
            'Observation is a function of all hidden states plus noise',
            'Best for source separation, biomedical signals, and multi-process data'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does FHMM avoid the state explosion problem of standard HMM?\nAns: A standard HMM needs Kᴹ combined states to model M processes; FHMM keeps M separate chains with K states each, reducing parameters from exponential to linear.',
            'Q2: In the cocktail party problem, how does FHMM separate mixed audio?\nAns: Each speaker is modeled as an independent hidden chain; the microphone observation is the mixture of all chains, and inference recovers the most likely state sequence for each speaker.',
            'Q3: What is the main limitation of the independence assumption in FHMM?\nAns: If the hidden processes strongly interact (e.g., exertion and emotion often correlate), the independence assumption breaks down and FHMM may underperform compared to coupled HMMs.'
          ]
        }
      ]
    }
  }
};

export default multimodalUnit4Content;
