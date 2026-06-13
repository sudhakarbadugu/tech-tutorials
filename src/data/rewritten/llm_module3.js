export const llmModule3Structure = {
  module3: {
    title: 'Module 3: Training, Fine-Tuning & Inference',
    topics: [
      { id: 'fine-tuning', title: 'Fine-Tuning Pre-trained Models' },
      { id: 'prompt-engineering', title: 'Prompt Engineering' },
      { id: 'instruction-tuning', title: 'Instruction Tuning' },
      { id: 'rlhf', title: 'RLHF: Reinforcement Learning from Human Feedback' },
      { id: 'model-compression', title: 'Model Compression' },
      { id: 'quantization', title: 'Quantization' },
      { id: 'distillation', title: 'Knowledge Distillation' },
      { id: 'pruning', title: 'Model Pruning' },
      { id: 'efficient-inference', title: 'Efficient Inference' },
      { id: 'llm-evaluation', title: 'LLM Evaluation' },
    ]
  }
};

export const llmModule3Content = {
  module3: {
    'fine-tuning': {
      title: 'Fine-Tuning Pre-trained Models',
      subtitle: 'Adapting foundation models to specific tasks',
      sections: [
        {
          heading: 'Why Fine-Tune?',
          text: 'Foundation models like GPT, BERT, and LLaMA are trained on vast, diverse corpora. Fine-tuning adapts these general representations to specific tasks with relatively small labeled datasets, achieving strong performance with far less data than training from scratch.',
          example: {
            title: 'Fine-Tuning vs. From-Scratch',
            code: 'Train from scratch:\n  Data: 1B+ tokens\n  Cost: $100,000+\n  Time: Weeks on GPU clusters\n\nFine-tune BERT-Base:\n  Data: 10K labeled examples\n  Cost: ~$50\n  Time: Minutes to hours\n  Result: 94% accuracy on task',
            output: 'Fine-tuning is 1000x cheaper and faster while delivering competitive results.',
            type: 'code'
          }
        },
        {
          heading: 'Fine-Tuning Strategies',
          table: {
            headers: ['Strategy', 'What Gets Updated', 'Best For', 'Trade-off'],
            rows: [
              ['Full fine-tuning', 'All parameters', 'Large task-specific datasets', 'Highest accuracy, highest cost'],
              ['Layer-wise', 'Last N layers only', 'Domain adaptation', 'Balanced cost and accuracy'],
              ['Task heads', 'Only classification head', 'Simple classification', 'Fastest, lowest capacity'],
              ['Adapters', 'Small inserted modules', 'Many tasks, limited compute', 'Modular, parameter-efficient'],
              ['LoRA', 'Low-rank decomposition', 'Consumer GPUs', 'Best PEFT method']
            ]
          }
        },
        {
          heading: 'The Fine-Tuning Pipeline',
          text: 'A systematic pipeline ensures reliable adaptation without catastrophic forgetting.',
          list: [
            '<strong>Data preparation:</strong> Curate high-quality, task-specific examples with consistent formatting',
            '<strong>Hyperparameter selection:</strong> Use smaller learning rates (1e-5 to 5e-5) than pre-training',
            '<strong>Regularization:</strong> Apply dropout, weight decay, and early stopping to prevent overfitting',
            '<strong>Evaluation:</strong> Monitor both task metrics and general language perplexity',
            '<strong>Checkpoint averaging:</strong> Average weights from the last few epochs for stability'
          ]
        },
        {
          heading: 'Catastrophic Forgetting',
          text: 'When fine-tuning aggressively, the model may overwrite its general knowledge to optimize for the narrow task.',
          example: {
            title: 'Forgetting Example',
            code: 'Pre-trained GPT:\n  Q: "What is the capital of France?"\n  A: "Paris"\n\nAfter aggressive fine-tune on medical QA:\n  Q: "What is the capital of France?"\n  A: "I am a medical assistant.\n   Please ask health-related questions."\n\nSolution: Use lower LR, LoRA,\nor replay general data during tuning.',
            output: 'Regularization and parameter-efficient methods preserve general capabilities.',
            type: 'code'
          }
        }
      ]
    },
    'prompt-engineering': {
      title: 'Prompt Engineering',
      subtitle: 'Designing inputs that unlock model capabilities',
      sections: [
        {
          heading: 'What is Prompt Engineering?',
          text: 'Prompt engineering is the practice of designing input prompts to guide LLMs toward desired outputs without modifying model weights. A well-crafted prompt can outperform naive fine-tuning for many tasks.',
          example: {
            title: 'Zero-Shot vs. Engineered Prompt',
            code: 'Naive prompt:\n  "Classify this: I loved the movie!"\n  → Confused output\n\nEngineered prompt:\n  "You are a sentiment classifier.\n   Rate the review as Positive,\n   Negative, or Neutral.\n\n   Review: I loved the movie!\n   Sentiment:"\n  → Positive',
            output: 'Context, role, and format instructions dramatically improve zero-shot performance.',
            type: 'code'
          }
        },
        {
          heading: 'Core Prompt Techniques',
          table: {
            headers: ['Technique', 'How It Works', 'When to Use'],
            rows: [
              ['Zero-shot', 'Direct instruction with no examples', 'Simple, well-defined tasks'],
              ['Few-shot', 'Include 2-5 input-output examples', 'Pattern-matching tasks'],
              ['Chain-of-Thought', 'Ask model to show reasoning step-by-step', 'Math, logic, multi-step problems'],
              ['Role prompting', 'Assign an expert persona', 'Domain-specific answers'],
              ['Self-consistency', 'Sample multiple times, pick majority', 'High-stakes reasoning'],
              ['ReAct', 'Reason + Act with tool use loops', 'External tool integration']
            ]
          }
        },
        {
          heading: 'Chain-of-Thought Prompting',
          text: 'Explicitly asking the model to "think step by step" improves reasoning accuracy by 20-50% on complex tasks.',
          example: {
            title: 'CoT for Arithmetic',
            code: 'Prompt:\n  "A bat and ball cost $11.\n   The bat costs $10 more than the ball.\n   How much does the ball cost?\n\n   Let\'s solve step by step."\n\nOutput:\n  Let ball = x\n  Then bat = x + 10\n  x + (x + 10) = 11\n  2x + 10 = 11\n  2x = 1\n  x = 0.5\n\n  The ball costs $0.50',
            output: 'Without CoT, models often blurt the intuitive but wrong answer ($1).',
            type: 'code'
          }
        },
        {
          heading: 'Prompt Design Principles',
          list: [
            '<strong>Be specific:</strong> Vague prompts produce inconsistent outputs. Define the exact format desired.',
            '<strong>Use delimiters:</strong> Separate instructions, context, and input with markers like triple quotes or XML tags',
            '<strong>Provide constraints:</strong> "Answer in one sentence" or "Use only the provided context" reduces hallucination',
            '<strong>Test variations:</strong> Small wording changes can significantly impact output quality',
            '<strong>Document what works:</strong> Maintain a prompt version history for reproducibility'
          ],
          note: 'Prompt engineering is empirical — there are few universal rules. Systematic experimentation is essential.'
        }
      ]
    },
    'instruction-tuning': {
      title: 'Instruction Tuning',
      subtitle: 'Teaching models to follow human instructions',
      sections: [
        {
          heading: 'What is Instruction Tuning?',
          text: 'Instruction tuning fine-tunes pre-trained language models on datasets of (instruction, input, output) triples. The goal is to teach the model to understand and follow natural language instructions for a wide variety of tasks.',
          example: {
            title: 'Instruction Format',
            code: 'Instruction: Translate the following\n         sentence to French.\n\nInput: The cat sat on the mat.\n\nOutput: Le chat s\'est assis\n         sur le tapis.\n\n---\n\nInstruction: Summarize the article\n         in one sentence.\n\nInput: [long article text]\n\nOutput: [one-sentence summary]',
            output: 'Diverse instruction datasets teach generalizable obedience to commands.',
            type: 'code'
          }
        },
        {
          heading: 'Key Instruction Datasets',
          table: {
            headers: ['Dataset', 'Size', 'Tasks', 'Notable Feature'],
            rows: [
              ['Natural Instructions', '1600+ tasks', 'Diverse NLP tasks', 'Crowdsourced templates'],
              ['FLAN', '62M examples', '180+ tasks', 'Mixed task formats'],
              ['Alpaca', '52K examples', 'General instruction', 'Self-instruct from GPT-3.5'],
              ['Dolly', '15K examples', 'Open QA, coding', 'Human-generated'],
              ['LIMA', '1K examples', 'Conversational', 'Quality over quantity']
            ]
          }
        },
        {
          heading: 'Self-Instruct',
          text: 'A bootstrapping method where a strong teacher model generates instruction-output pairs, which are then used to fine-tune a smaller student model.',
          example: {
            title: 'Self-Instruct Pipeline',
            code: 'Step 1: Seed with 175 human-written\n         instruction examples\n\nStep 2: Prompt GPT-3 to generate\n         new instructions\n\nStep 3: Filter low-quality / duplicate\n         instructions\n\nStep 4: Use GPT-3 to generate outputs\n         for each instruction\n\nStep 5: Fine-tune LLaMA on generated data\n\nResult: Alpaca, Vicuna, etc.',
            output: 'Self-instruct democratizes instruction tuning without massive human labeling.',
            type: 'code'
          }
        },
        {
          heading: 'Impact of Instruction Tuning',
          text: 'Instruction tuning transforms a "next-token predictor" into a helpful assistant that follows user intent.',
          list: [
            '<strong>Zero-shot generalization:</strong> Models perform unseen tasks described in natural language',
            '<strong>Format robustness:</strong> Tolerant of varied prompt styles and phrasings',
            '<strong>Multi-task capability:</strong> Single model handles translation, summarization, QA, coding',
            '<strong>Safer outputs:</strong> Better at refusing harmful requests when trained with safety instructions'
          ]
        }
      ]
    },
    'rlhf': {
      title: 'RLHF: Reinforcement Learning from Human Feedback',
      subtitle: 'Aligning language models with human preferences',
      sections: [
        {
          heading: 'The RLHF Pipeline',
          text: 'RLHF is a three-stage process that aligns pre-trained models with human values, preferences, and safety constraints.',
          example: {
            title: 'RLHF Three-Stage Process',
            code: 'Stage 1 — Supervised Fine-Tuning (SFT):\n  Train on high-quality human demonstrations\n  → Base policy model\n\nStage 2 — Reward Model Training:\n  Humans rank model outputs: A > B > C\n  Train reward model to predict preferences\n  → R(x, y) = predicted human preference\n\nStage 3 — RL Optimization (PPO):\n  Maximize: R(x, y) - KL_penalty(π || π_ref)\n  → Aligned, helpful, harmless model',
            output: 'RLHF is the key ingredient behind ChatGPT and Claude.',
            type: 'code'
          },
          diagram: {
            caption: 'RLHF three-stage alignment pipeline',
            chart: `flowchart LR
    A[Pre-trained LLM] --> B[SFT on demonstrations]
    B --> C[Policy model]
    C --> D[Human rankings]
    D --> E[Reward model]
    E --> F[PPO optimization]
    F --> G[Aligned LLM]`
          }
        },
        {
          heading: 'Why RLHF is Necessary',
          text: 'Pre-trained models predict likely text, not helpful text. RLHF bridges this gap.',
          example: {
            title: 'Before vs. After RLHF',
            code: 'Prompt: "How do I hack a computer?"\n\nBefore RLHF (pre-trained):\n  "Step 1: Find vulnerabilities...\n   Step 2: Exploit them..."\n\nAfter RLHF (aligned):\n  "I can\'t help with hacking.\n   If you\'re interested in\n   cybersecurity, I can suggest\n   ethical hacking resources."',
            output: 'RLHF makes models helpful, harmless, and honest without losing capabilities.',
            type: 'code'
          }
        },
        {
          heading: 'RL Algorithms for LLMs',
          table: {
            headers: ['Algorithm', 'Mechanism', 'Pros', 'Cons'],
            rows: [
              ['PPO', 'Clipped surrogate objective', 'Stable, widely used', 'Complex hyperparameters'],
              ['DPO', 'Direct preference optimization', 'No reward model needed', 'Slightly less flexible'],
              ['RLHF with RMs', 'Reward model + PPO', 'Best performance', 'Expensive, complex'],
              ['Constitutional AI', 'Self-critique + revision', 'Scales without human labels', 'Requires strong base model']
            ]
          }
        },
        {
          heading: 'Challenges in RLHF',
          list: [
            '<strong>Reward hacking:</strong> Models exploit flaws in the reward model to get high scores without being helpful',
            '<strong>Distribution shift:</strong> Model explores outside training distribution, producing incoherent text',
            '<strong>KL divergence trade-off:</strong> Too much RL training makes outputs degenerate; too little preserves unwanted behaviors',
            '<strong>Human labeler bias:</strong> Preferences reflect the values of the labeling demographic',
            '<strong>Scalability:</strong> High-quality human feedback is expensive and time-consuming to collect'
          ],
          note: 'RLHF is powerful but not perfect. Models can still jailbreak, hallucinate, or reflect biases in the feedback data.'
        }
      ]
    },
    'model-compression': {
      title: 'Model Compression',
      subtitle: 'Making large models smaller and faster',
      sections: [
        {
          heading: 'Why Compress Models?',
          text: 'State-of-the-art LLMs have hundreds of billions of parameters, requiring massive memory and compute. Model compression reduces size while preserving capability, enabling deployment on consumer hardware, edge devices, and reducing inference costs.',
          example: {
            title: 'Compression Impact',
            code: 'GPT-3 (175B params):\n  Memory: 700 GB (FP32)\n  Inference: A100 GPU cluster\n  Cost: $0.02 / 1K tokens\n\nCompressed GPT-3 (INT8):\n  Memory: 175 GB\n  Inference: Single A100\n  Cost: $0.005 / 1K tokens\n\nDistilled model (1.5B):\n  Memory: 6 GB\n  Inference: Consumer GPU / CPU\n  Cost: $0.0001 / 1K tokens',
            output: 'Compression can reduce cost by 100x with modest accuracy trade-offs.',
            type: 'code'
          }
        },
        {
          heading: 'Compression Techniques Overview',
          table: {
            headers: ['Technique', 'What It Does', 'Typical Savings', 'Accuracy Impact'],
            rows: [
              ['Quantization', 'Lower precision weights', '2-4x smaller', 'Minimal (INT8) to moderate (INT4)'],
              ['Distillation', 'Train small model from big', '10-100x smaller', 'Moderate'],
              ['Pruning', 'Remove unimportant weights', '2-10x smaller', 'Low to moderate'],
              ['Low-Rank Adaptation', 'Low-rank weight updates', 'Not compression per se', 'N/A (PEFT)'],
              ['Architecture Search', 'Find efficient architectures', '2-5x faster', 'Task-dependent']
            ]
          }
        },
        {
          heading: 'Trade-offs in Compression',
          text: 'Compression always involves balancing model size, inference speed, and task accuracy.',
          list: [
            '<strong>Accuracy vs. size:</strong> Smaller models generally underperform; the goal is finding the "sweet spot"',
            '<strong>Latency vs. throughput:</strong> Some techniques speed up single queries; others improve batch processing',
            '<strong>Static vs. dynamic:</strong> Static compression happens once at training time; dynamic methods adapt per input',
            '<strong>Hardware compatibility:</strong> INT8 needs TensorRT/Core ML; INT4 needs specialized kernels'
          ]
        }
      ]
    },
    'quantization': {
      title: 'Quantization',
      subtitle: 'Reducing numerical precision for efficiency',
      sections: [
        {
          heading: 'What is Quantization?',
          text: 'Quantization reduces the precision of model weights and activations, typically from 32-bit floating point (FP32) to 16-bit (FP16), 8-bit integer (INT8), or even 4-bit (INT4).',
          example: {
            title: 'INT8 Quantization',
            code: 'FP32 weight:  0.003142\nScale factor: 1 / 0.000122 = 8192\nINT8 weight:  round(0.003142 / 0.000122) = 26\n\nStorage comparison (175B model):\n  FP32: 4 bytes × 175B = 700 GB\n  FP16: 2 bytes × 175B = 350 GB\n  INT8: 1 byte × 175B = 175 GB\n  INT4: 0.5 bytes × 175B = 87.5 GB\n\nSpeedup: ~2-4x on INT8-capable hardware',
            output: 'Quantization dramatically reduces memory and increases inference speed.',
            type: 'code'
          }
        },
        {
          heading: 'Quantization Methods',
          table: {
            headers: ['Method', 'Precision', 'When Applied', 'Accuracy Impact', 'Best For'],
            rows: [
              ['Post-Training (PTQ)', 'INT8', 'After training', 'Minor (1-2%)', 'Quick deployment'],
              ['Quantization-Aware Training (QAT)', 'INT8/INT4', 'During training', 'Minimal', 'Best accuracy'],
              ['GPTQ', 'INT4', 'Post-training', 'Moderate', 'Consumer GPUs'],
              ['AWQ', 'INT4', 'Post-training', 'Low', 'Edge devices'],
              ['SmoothQuant', 'INT8', 'Post-training', 'Low', 'LLM serving'],
              ['GGUF/GGML', 'Q4_K_M, Q5_K_M', 'Post-training', 'Low-Moderate', 'Local CPU inference']
            ]
          }
        },
        {
          heading: 'Symmetric vs. Asymmetric Quantization',
          text: 'Two main approaches to mapping floating-point values to integers.',
          example: {
            title: 'Quantization Schemes',
            code: 'Symmetric:\n  q = round(x / scale)\n  scale = max(|x|) / 127\n  Zero point = 0\n\nAsymmetric:\n  q = round((x - zero_point) / scale)\n  scale = (max(x) - min(x)) / 255\n  zero_point = -round(min(x) / scale)\n\nSymmetric is faster.\nAsymmetric handles skewed\ndistributions better.',
            output: 'Per-channel quantization outperforms per-tensor for activations.',
            type: 'code'
          }
        },
        {
          heading: 'Challenges in LLM Quantization',
          list: [
            '<strong>Outlier features:</strong> A few dimensions have extreme values that dominate quantization range, hurting precision for most values',
            '<strong>Activation quantization:</strong> Dynamic ranges vary per token; static calibration often insufficient',
            '<strong>Layer sensitivity:</strong> Some layers (attention projections) are more sensitive to precision loss than others',
            '<strong>4-bit degradation:</strong> Below 8 bits, accuracy drops unless using advanced grouping (GPTQ, AWQ) or mixed precision'
          ],
          note: 'Modern frameworks like llama.cpp, vLLM, and TensorRT-LLM automate quantization pipelines for popular model families.'
        }
      ]
    },
    'distillation': {
      title: 'Knowledge Distillation',
      subtitle: 'Transferring knowledge from large to small models',
      sections: [
        {
          heading: 'What is Knowledge Distillation?',
          text: 'Knowledge distillation trains a small <strong>student</strong> model to mimic a large <strong>teacher</strong> model. The student learns from the teacher\'s soft probability distributions ("dark knowledge") rather than just hard labels.',
          example: {
            title: 'Distillation Loss',
            code: 'Teacher output (softmax with T=4):\n  cat: 0.70, dog: 0.25, fox: 0.05\n\nHard label:\n  cat: 1.0, dog: 0.0, fox: 0.0\n\nStudent learns from soft targets:\n  L = α × CE(student, hard_labels)\n    + (1-α) × KL(student/T, teacher/T)\n\nTemperature T smooths probabilities,\nrevealing inter-class relationships.',
            output: 'Soft targets encode rich similarity information between classes.',
            type: 'code'
          }
        },
        {
          heading: 'Types of Distillation',
          table: {
            headers: ['Type', 'What Student Learns', 'Use Case', 'Example'],
            rows: [
              ['Logit distillation', 'Teacher output probabilities', 'Classification', 'Hinton et al. 2015'],
              ['Feature distillation', 'Intermediate hidden states', 'Vision, NLP', 'FitNets, MiniLM'],
              ['Attention distillation', 'Attention weight maps', 'Transformers', 'TinyBERT, MobileBERT'],
              ['Self-distillation', 'Older version of itself', 'No teacher needed', 'DeepSelf'],
              ['Online distillation', 'Peer models in ensemble', 'Distributed training', 'Deep Mutual Learning']
            ]
          }
        },
        {
          heading: 'Distillation in Practice',
          text: 'Distillation is widely used to create efficient, deployable variants of large models.',
          example: {
            title: 'DistilBERT Example',
            code: 'Teacher: BERT-Base\n  Layers: 12, Hidden: 768\n  Params: 110M\n  Speed: 1x\n\nStudent: DistilBERT\n  Layers: 6 (removed every 2nd)\n  Hidden: 768\n  Params: 66M (40% smaller)\n  Speed: 2x faster\n  GLUE: 97% of BERT performance\n\nTraining:\n  L = 0.5 × CE + 0.5 × distillation\n    + cosine loss on hidden states',
            output: 'DistilBERT proved distillation works at scale for transformers.',
            type: 'code'
          }
        },
        {
          heading: 'Limitations of Distillation',
          list: [
            '<strong>Capacity gap:</strong> Very small students cannot capture all teacher knowledge regardless of training',
            '<strong>Teacher quality ceiling:</strong> Student cannot exceed teacher; errors and biases are inherited',
            '<strong>Task specificity:</strong> Distilled models are less flexible than the teacher for out-of-distribution tasks',
            '<strong>Training cost:</strong> Requires running the large teacher during training, which is expensive'
          ]
        }
      ]
    },
    'pruning': {
      title: 'Model Pruning',
      subtitle: 'Removing redundant weights and connections',
      sections: [
        {
          heading: 'What is Pruning?',
          text: 'Pruning removes weights, neurons, or entire layers that contribute little to model output. The goal is sparsity: a model with many zero values that can be stored and computed efficiently.',
          example: {
            title: 'Magnitude Pruning',
            code: 'Weight matrix (before):\n[[0.12, -0.89,  0.01,  0.34],\n [0.05,  0.02, -0.91,  0.07],\n [0.03,  0.11,  0.04, -0.82],\n [0.01, -0.03,  0.02,  0.01]]\n\nMagnitude threshold: 0.10\n\nAfter pruning (zeros highlighted):\n[[0.00, -0.89,  0.00,  0.34],\n [0.00,  0.00, -0.91,  0.00],\n [0.00,  0.11,  0.00, -0.82],\n [0.00,  0.00,  0.00,  0.00]]\n\nSparsity: 10/16 = 62.5%',
            output: 'Simple magnitude pruning removes small weights that contribute minimally.',
            type: 'code'
          }
        },
        {
          heading: 'Pruning Strategies',
          table: {
            headers: ['Strategy', 'What Is Pruned', 'Granularity', 'Impact'],
            rows: [
              ['Unstructured', 'Individual weights', 'Fine-grained', 'Highest sparsity, needs sparse kernels'],
              ['Structured (row/col)', 'Weight rows/columns', 'Coarse', 'Natural speedup, less sparsity'],
              ['Head pruning', 'Attention heads', 'Medium', 'Direct FLOP reduction in transformers'],
              ['Layer pruning', 'Entire layers', 'Coarse', 'Dramatic speedup, larger accuracy hit'],
              ['Block pruning', 'N×M weight blocks', 'Medium', 'Hardware-friendly on NVIDIA Ampere+']
            ]
          }
        },
        {
          heading: 'Pruning Schedules',
          text: 'When and how to remove weights matters as much as which weights to remove.',
          example: {
            title: 'Iterative Magnitude Pruning',
            code: 'Step 1: Train dense model to convergence\nStep 2: Prune 10% of smallest weights\nStep 3: Fine-tune for a few epochs\nStep 4: Prune another 10%\nStep 5: Fine-tune again\n...\nRepeat until target sparsity (e.g., 80%)\n\nResult:\n  Gradual pruning + fine-tuning\n  recovers accuracy after each cut.',
            output: 'One-shot pruning causes large accuracy drops; iterative pruning preserves performance.',
            type: 'code'
          }
        },
        {
          heading: 'Sparsity Acceleration',
          text: 'Pruning only saves memory if hardware and software support sparse computation.',
          list: [
            '<strong>Sparse matrices:</strong> CSR/CSC formats store only non-zeros and their indices',
            '<strong>Sparse kernels:</strong> NVIDIA cuSPARSE, Intel MKL optimize sparse matrix multiplication',
            '<strong>2:4 structured sparsity:</strong> NVIDIA Ampere GPUs natively accelerate 50% sparsity patterns',
            '<strong>Compiler support:</strong> ONNX Runtime, TensorRT optimize sparse transformer inference'
          ]
        }
      ]
    },
    'efficient-inference': {
      title: 'Efficient Inference',
      subtitle: 'Speeding up model serving and reducing latency',
      sections: [
        {
          heading: 'Inference Optimization Techniques',
          text: 'Beyond model compression, multiple system-level techniques accelerate LLM inference.',
          example: {
            title: 'KV Cache',
            code: 'Standard autoregressive generation:\n  For each new token:\n    Recompute attention for ALL tokens\n    → O(n²) per step\n\nWith KV Cache:\n  Store Key and Value vectors\n  for each previous token\n\n  For new token t:\n    Only compute Q for token t\n    Attend to cached K, V of tokens 1..t-1\n    → O(n) per step\n\nSpeedup: 10-100x for long sequences',
            output: 'KV cache is essential for performant autoregressive generation.',
            type: 'code'
          }
        },
        {
          heading: 'Advanced Inference Methods',
          table: {
            headers: ['Technique', 'Mechanism', 'Speedup', 'Trade-off'],
            rows: [
              ['KV Cache', 'Reuse past key-value pairs', '10-100x', 'Memory overhead'],
              ['Continuous Batching', 'Dynamic batch sizing', '3-10x throughput', 'Complex scheduler'],
              ['Speculative Decoding', 'Draft small model, verify with large', '2-3x', 'Needs draft model'],
              ['FlashAttention', 'Tiled memory-efficient attention', '2-4x', 'None (better and faster)'],
              ['PagedAttention', 'Block-based KV cache management', '2-4x', 'Improved memory'],
              ['Tensor Parallelism', 'Split layers across GPUs', 'Linear scaling', 'Communication cost']
            ]
          }
        },
        {
          heading: 'FlashAttention',
          text: 'An I/O-aware algorithm that speeds up attention by reducing memory reads/writes, not by approximating.',
          example: {
            title: 'FlashAttention Tiling',
            code: 'Standard Attention:\n  Load Q, K, V (O(N²) memory)\n  Compute S = QKᵀ\n  Compute P = softmax(S)\n  Compute O = PV\n  → Many HBM reads/writes\n\nFlashAttention:\n  1. Tile Q, K, V into SRAM-sized blocks\n  2. Compute attention incrementally\n  3. Keep running softmax statistics\n  4. Write only final output O\n\nResult: Fewer HBM accesses\n= faster + less memory',
            output: 'FlashAttention is exact — no approximation, just better memory layout.',
            type: 'code'
          }
        },
        {
          heading: 'Serving Frameworks',
          text: 'Production deployment of LLMs requires specialized serving infrastructure.',
          list: [
            '<strong>vLLM:</strong> PagedAttention + continuous batching for high-throughput serving',
            '<strong>TensorRT-LLM:</strong> NVIDIA-optimized kernels, quantization, and multi-GPU support',
            '<strong>Text Generation Inference (TGI):</strong> Hugging Face production server with sharding',
            '<strong>llama.cpp:</strong> CPU/GPU inference with GGUF quantization for local deployment',
            '<strong>MLC LLM:</strong> Universal deployment on diverse hardware (phone, browser, edge)'
          ]
        }
      ]
    },
    'llm-evaluation': {
      title: 'LLM Evaluation',
      subtitle: 'Measuring capabilities, safety, and alignment',
      sections: [
        {
          heading: 'Why Evaluate LLMs?',
          text: 'Evaluation measures what a model can do, where it fails, and how it compares to alternatives. Good evaluation spans capability, safety, efficiency, and alignment.',
          example: {
            title: 'Evaluation Dimensions',
            code: 'Capability:\n  - MMLU: academic knowledge\n  - HumanEval: code generation\n  - GSM8K: math reasoning\n\nSafety:\n  - TruthfulQA: truthfulness\n  - BBQ: social bias\n  - Toxicity classifiers\n\nEfficiency:\n  - Throughput: tokens/sec\n  - Latency: time to first token\n  - Memory: GB per request',
            output: 'No single metric captures model quality. Multi-dimensional evaluation is essential.',
            type: 'code'
          },
          diagram: {
            caption: 'LLM evaluation spans capability, safety, and efficiency',
            chart: `flowchart TD
    A[Evaluate LLM] --> B[Capability]
    A --> C[Safety]
    A --> D[Efficiency]
    B --> B1[MMLU]
    B --> B2[HumanEval]
    B --> B3[GSM8K]
    C --> C1[TruthfulQA]
    C --> C2[BBQ]
    D --> D1[Throughput]
    D --> D2[Latency]`
          }
        },
        {
          heading: 'Core Benchmarks',
          table: {
            headers: ['Benchmark', 'What It Tests', 'Format', 'Key Metric'],
            rows: [
              ['MMLU', '57 subjects (STEM to humanities)', 'Multiple choice', 'Accuracy'],
              ['HumanEval', 'Python function completion', 'Code generation', 'Pass@k'],
              ['GSM8K', 'Grade school math word problems', 'Open-ended', 'Accuracy'],
              ['TruthfulQA', 'Truth vs. common misconceptions', 'Open-ended', 'Truthfulness score'],
              ['BBQ', 'Social bias in ambiguous contexts', 'Multiple choice', 'Bias score'],
              ['HellaSwag', 'Commonsense reasoning', 'Sentence completion', 'Accuracy'],
              ['ARC', 'Science exam questions', 'Multiple choice', 'Accuracy']
            ]
          }
        },
        {
          heading: 'Perplexity',
          text: 'The classic language modeling metric. Lower perplexity means the model is less "surprised" by test data.',
          example: {
            title: 'Perplexity Calculation',
            code: 'PP(W) = exp(-1/N Σ log P(wᵢ | w₁..wᵢ₋₁))\n\nExample:\n  Model A: PP = 12.3 on WikiText-103\n  Model B: PP = 10.1 on WikiText-103\n\nModel B assigns higher probability\nto real text → better language model.\n\nPerplexity = 2^(cross-entropy)\n\nCaveat: Lower PP ≠ better assistant.\nA model that always predicts "the"\nhas low PP but is useless.',
            output: 'Perplexity measures fluency, not usefulness or truthfulness.',
            type: 'code'
          }
        },
        {
          heading: 'Human Evaluation',
          text: 'Automated benchmarks are necessary but not sufficient. Human judgment remains the gold standard for assessing helpfulness, coherence, and safety.',
          list: [
            '<strong>Elo ratings:</strong> Pairwise comparison of model outputs by human judges, producing a ranked leaderboard',
            '<strong>Pointwise scoring:</strong> Humans rate single responses on 1-5 scales for helpfulness, accuracy, and safety',
            '<strong>Red teaming:</strong> Experts deliberately probe for harmful outputs, jailbreaks, and edge-case failures',
            '<strong>Task-specific evaluation:</strong> Domain experts assess outputs in their area (medicine, law, coding)'
          ],
          note: 'The best evaluation combines broad benchmarks (for reproducibility), narrow expert tests (for depth), and human preferences (for real-world utility).'
        }
      ]
    }
  }
};
