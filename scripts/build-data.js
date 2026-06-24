import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(__dirname, "..");
const dataDir = path.join(projectDir, "src/data");
const rewrittenDir = path.join(dataDir, "rewritten");

async function loadModule(filePath) {
  const mod = await import("file://" + filePath);
  return mod;
}

function serializeValue(val, indent = 2) {
  const spaces = " ".repeat(indent);
  if (val === null) return "null";
  if (typeof val === "boolean") return String(val);
  if (typeof val === "number") return String(val);
  if (typeof val === "string") {
    // Use backticks if string contains newlines or single quotes that would need escaping
    if (val.includes("\n") || val.includes("'")) {
      return `\`${val.replace(/\\/g, "\\\\").replace(/\${/g, "\\$\\{").replace(/`/g, "\\`")}\``;
    }
    return `'${val}'`;
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return "[]";
    const items = val.map((v) => serializeValue(v, indent + 2));
    return `[\n${spaces}  ${items.join(",\n" + spaces + "  ")}\n${spaces}]`;
  }
  if (typeof val === "object") {
    const entries = Object.entries(val);
    if (entries.length === 0) return "{}";
    const props = entries.map(([k, v]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`;
      return `${key}: ${serializeValue(v, indent + 2)}`;
    });
    return `{\n${spaces}  ${props.join(",\n" + spaces + "  ")}\n${spaces}}`;
  }
  return String(val);
}

async function build() {
  console.log("🔧 Building combined tutorialData.js from rewritten modules...");

  const files = fs.readdirSync(rewrittenDir).filter((f) => f.endsWith(".js"));

  // Map: subject -> { moduleKey -> { Structure?: obj, Content?: obj } }
  const subjects = {};

  for (const file of files) {
    const filePath = path.join(rewrittenDir, file);
    let mod;
    try {
      mod = await loadModule(filePath);
    } catch (e) {
      console.error(`❌ Failed to load ${file}: ${e.message}`);
      continue;
    }

    for (const [exportName, value] of Object.entries(mod)) {
      let subject = null;
      let moduleKey = null;
      let type = null;

      // Parse export name
      const moduleMatch = exportName.match(
        /^([a-zA-Z]+)Module(\d+)(Structure|Content)$/,
      );
      if (moduleMatch) {
        subject = moduleMatch[1].toLowerCase();
        moduleKey = `module${moduleMatch[2]}`;
        type = moduleMatch[3];
      }

      const unitMatch = exportName.match(
        /^([a-zA-Z]+)Unit(\d+)(Structure|Content)$/,
      );
      if (unitMatch) {
        subject = unitMatch[1].toLowerCase();
        moduleKey = `unit${unitMatch[2]}`;
        type = unitMatch[3];
      }

      if (
        exportName === "timeSeriesStructure" ||
        exportName === "timeSeriesContent"
      ) {
        subject = "timeseries";
        type = exportName.includes("Structure") ? "Structure" : "Content";
        // timeSeries exports are monolithic — extract all modules
        if (type === "Structure" && value) {
          for (const mk of Object.keys(value)) {
            if (!subjects[subject]) subjects[subject] = {};
            if (!subjects[subject][mk]) subjects[subject][mk] = {};
            subjects[subject][mk].Structure = { [mk]: value[mk] };
          }
        }
        if (type === "Content" && value) {
          for (const mk of Object.keys(value)) {
            if (!subjects[subject]) subjects[subject] = {};
            if (!subjects[subject][mk]) subjects[subject][mk] = {};
            subjects[subject][mk].Content = { [mk]: value[mk] };
          }
        }
        continue;
      }

      // Handle problematic nlp_module2-4 exports
      if (
        (exportName === "nlpStructure" || exportName === "nlpContent") &&
        file.match(/nlp_module(\d+)/)
      ) {
        const nlpModMatch = file.match(/nlp_module(\d+)/);
        subject = "nlp";
        moduleKey = `module${nlpModMatch[1]}`;
        type = exportName.includes("Structure") ? "Structure" : "Content";
      }

      if (!subject || !moduleKey || !type) continue;

      if (!subjects[subject]) subjects[subject] = {};
      if (!subjects[subject][moduleKey]) subjects[subject][moduleKey] = {};
      subjects[subject][moduleKey][type] = value;
    }
  }

  // Generate output
  const lines = [];
  lines.push("// Auto-generated from rewritten modules");
  lines.push("// Generated: " + new Date().toISOString());
  lines.push("");

  // Subject metadata mapping
  const subjectMeta = {
    ai: { title: "Fundamentals of Artificial Intelligence" },
    cv: { title: "Computer Vision Techniques" },
    dl: { title: "Deep Learning Approaches" },
    dsa: { title: "Data Structures & Algorithms" },
    imaging: { title: "Applied ML in Imaging Systems" },
    llm: { title: "Large Language Models" },
    mlalgo: { title: "Machine Learning Algorithms" },
    multimodal: { title: "Multimodal Machine Learning" },
    nlp: { title: "Natural Language Processing" },
    rl: { title: "Reinforcement Learning Algorithms" },
    stats: { title: "Inferential Statistics" },
    timeseries: { title: "Time Series Analysis" },
  };

  // Human-readable module/unit titles. Used when a rewritten module exports
  // content but no explicit structure, preventing generic "Unit1" labels.
  const moduleTitleMap = {
    ai: {
      module1: "Module 1: Foundations of Artificial Intelligence",
      module2: "Module 2: Search, Games, and Multi-Agent Systems",
      module3: "Module 3: Knowledge Representation & Reasoning",
      module4: "Module 4: Planning, Reasoning, and Decision Making",
      module5: "Module 5: Ethics, Safety, Governance & Future of AI",
    },
    cv: {
      module1: "Module 1: Foundations of Computer Vision",
      module2: "Module 2: Feature Detection, Description & Recognition",
      module3: "Module 3: Stereo Vision, Motion & 3D Reconstruction",
      module4: "Module 4: 3D Vision & Applications",
      module5: "Module 5: Advanced CV & Deployment",
    },
    dl: {
      module1: "Module 1: Foundations of Deep Learning",
      module2: "Module 2: Training Deep Networks",
      module3: "Module 3: Convolutional Neural Networks",
      module4: "Module 4: Recurrent Neural Networks",
      module5: "Module 5: Advanced Architectures",
    },
    dsa: {
      module1: "Module 1: Core Linear Structures",
      module2: "Module 2: Trees & Heaps",
      module3: "Module 3: Sorting, Searching & Patterns",
      module4: "Module 4: DP & Graph Algorithms",
      module5: "Module 5: Practical DS in Python/Java",
    },
    imaging: {
      module1: "Module 1: Imaging Foundations",
      module2: "Module 2: Image Processing Fundamentals",
      module3: "Module 3: Advanced Image Processing",
      module4: "Module 4: 3D Vision & Reconstruction",
      module5: "Module 5: Video Processing & Analysis",
    },
    llm: {
      module1: "Module 1: Foundations of Language Models",
      module2: "Module 2: Neural Language Models & Word Representations",
      module3: "Module 3: Training, Fine-Tuning & Inference",
      module4: "Module 4: Advanced Reasoning, Prompting & Agentic Systems",
      module5: "Module 5: Advanced LLM Topics",
    },
    mlalgo: {
      module1: "Module 1: Introduction and Analysis of ML Algorithms",
      module2: "Module 2: Design and Analysis of ML Algorithms",
      module3: "Module 3: Algorithm Design Paradigms",
      module4: "Module 4: Advanced Algorithmic Techniques",
      module5: "Module 5: Advanced Algorithms & Systems",
    },
    multimodal: {
      unit1: "Unit 1: Foundations of Multimodal ML",
      unit2: "Unit 2: Vision-Language Models",
      unit3: "Unit 3: Multimodal Fusion",
      unit4: "Unit 4: Generative Multimodal Models",
      unit5: "Unit 5: Applications & Systems",
    },
    nlp: {
      module1: "Module 1: NLP Foundations",
      module2: "Module 2: NLP Techniques & Applications",
      module3: "Module 3: Transformers, Pretrained Models & Prompting",
      module4: "Module 4: Large Language Models",
      module5: "Module 5: Ethics & Future of NLP",
    },
    rl: {
      module1: "Module 1: Foundations of Reinforcement Learning",
      module2: "Module 2: Core RL Algorithms",
      module3: "Module 3: Model-Free Learning",
      module4: "Module 4: Advanced RL Methods",
      module5: "Module 5: RL Applications",
    },
    stats: {
      module1: "Module 1: Introduction to Statistics",
      module2: "Module 2: Probability Foundations",
      module3: "Module 3: Hypothesis Testing",
      module4: "Module 4: Regression Analysis",
      module5: "Module 5: Advanced Statistical Methods",
    },
    timeseries: {
      module1: "Module 1: Introduction to Time Series",
      module2: "Module 2: Moving Average & Smoothing",
      module3: "Module 3: Stationary Processes",
      module4: "Module 4: Non-Stationary Processes",
      module5: "Module 5: Multivariate Time Series",
    },
  };

  // Human-readable topic titles for short IDs / acronyms that the auto-generator
  // would otherwise title-case incorrectly (e.g. "Svm", "Cnn", "Knn").
  const topicTitleMap = {
    anova: "ANOVA",
    bart: "BART",
    bert: "BERT",
    "bert-nlp": "BERT",
    bptt: "Backpropagation Through Time (BPTT)",
    cca: "Canonical Correlation Analysis (CCA)",
    cnn: "Convolutional Neural Network (CNN)",
    densenet: "DenseNet",
    dtw: "Dynamic Time Warping (DTW)",
    elmo: "ELMo",
    gpt: "GPT",
    "gpt-nlp": "GPT",
    gru: "Gated Recurrent Unit (GRU)",
    knn: "K-Nearest Neighbors (KNN)",
    lstm: "Long Short-Term Memory (LSTM)",
    resnet: "ResNet",
    rnn: "Recurrent Neural Network (RNN)",
    sarsa: "SARSA",
    slam: "SLAM",
    svm: "Support Vector Machine (SVM)",
    transformers: "Transformers",
    "transformers-nlp": "Transformers",
    vqa: "Visual Question Answering (VQA)",
    // Deep Learning module topic IDs
    "intro-dl": "Introduction to Deep Learning",
    "activation-functions": "Activation Functions",
    "loss-functions": "Loss Functions",
    "gradient-descent": "Gradient Descent",
    "advanced-optimizers": "Advanced Optimizers",
    "weight-initialization": "Weight Initialization",
    "normalization-and-regularization": "Normalization & Regularization",
    "learning-rate-scheduling": "Learning Rate Scheduling",
    "debugging-training": "Debugging & Distributed Training",
    "convolution-arithmetic": "Convolution Arithmetic",
    "lenet-alexnet-vgg": "LeNet, AlexNet & VGG",
    "transfer-learning-cnn": "Transfer Learning with torchvision",
    "data-augmentation": "Data Augmentation",
    "rnn-basics": "RNN Basics",
    "lstm-gru": "LSTM & GRU",
    "text-generation": "Text Generation",
    "time-series-forecasting": "Time Series Forecasting",
    "attention-intro": "Introduction to Attention",
    "transformers-from-scratch": "Transformers from Scratch",
    autoencoders: "Autoencoders",
    gans: "Generative Adversarial Networks",
    "modern-regularization": "Modern Regularization",
    "scalable-training": "Scalable & Distributed Training",
    // Multimodal Unit 1: Foundations
    "intro-multimodal": "Introduction to Multimodal Machine Learning",
    "modality-representations": "Modality Representations",
    "alignment-challenge": "The Alignment Challenge",
    "co-learning-zero-shot": "Co-learning and Zero-Shot Transfer",
    "multimodal-datasets": "Multimodal Datasets",
    // Multimodal Unit 2: Vision-Language Models
    clip: "CLIP",
    "zero-shot-classification": "Zero-Shot Classification",
    "image-text-retrieval": "Image-Text Retrieval",
    llava: "LLaVA",
    "fine-tune-clip": "Fine-Tuning CLIP",
    // Multimodal Unit 3: Multimodal Fusion
    "early-late-hybrid-fusion": "Early, Late, and Hybrid Fusion",
    "attention-based-fusion": "Attention-Based Fusion",
    "cross-attention": "Cross-Attention Mechanism",
    "multimodal-sentiment-classifier":
      "Build a Multimodal Sentiment Classifier",
    "fusion-best-practices": "Fusion Best Practices",
    // Multimodal Unit 4: Generative Multimodal Models
    "dalle-stable-diffusion":
      "Text-to-Image Models: DALL·E and Stable Diffusion",
    "text-to-image-pipeline": "Building a Text-to-Image Pipeline",
    "multimodal-gpt4v": "Multimodal LLMs: GPT-4V and Beyond",
    "whisper-audio-text": "Whisper: Audio-Text Foundation Model",
    "generation-evaluation": "Evaluating Generative Multimodal Models",
    // Multimodal Unit 5: Applications & Systems
    "visual-question-answering": "Visual Question Answering",
    "image-captioning": "Image Captioning",
    "video-understanding": "Video Understanding",
    "medical-multimodal-ai": "Medical Multimodal AI",
    "multimodal-systems-design": "Designing Multimodal Systems",
  };

  function formatTopicTitle(id) {
    if (topicTitleMap[id]) return topicTitleMap[id];
    return id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function formatModuleTitle(subject, moduleKey) {
    return (
      moduleTitleMap[subject]?.[moduleKey] ||
      `${moduleKey.charAt(0).toUpperCase() + moduleKey.slice(1)}`
    );
  }

  // Generate structure and content exports per subject
  for (const [subject, modules] of Object.entries(subjects)) {
    const modKeys = Object.keys(modules).sort();

    // Build structure
    const structParts = [];
    for (const modKey of modKeys) {
      const modData = modules[modKey];
      if (modData.Structure && modData.Structure[modKey]) {
        structParts.push(
          `  ${modKey}: ${serializeValue(modData.Structure[modKey], 2)}`,
        );
      } else if (modData.Content && modData.Content[modKey]) {
        // Auto-generate structure from content keys
        const topics = Object.keys(modData.Content[modKey]).map((tid) => ({
          id: tid,
          title: formatTopicTitle(tid),
        }));
        const autoStruct = {
          title: formatModuleTitle(subject, modKey),
          topics,
        };
        structParts.push(`  ${modKey}: ${serializeValue(autoStruct, 2)}`);
      }
    }

    if (structParts.length > 0) {
      lines.push(`export const ${subject}Structure = {`);
      lines.push(structParts.join(",\n"));
      lines.push("};");
      lines.push("");
    }

    // Build content
    const contentParts = [];
    for (const modKey of modKeys) {
      const modData = modules[modKey];
      if (modData.Content && modData.Content[modKey]) {
        const topicParts = [];
        for (const [topicKey, topicData] of Object.entries(
          modData.Content[modKey],
        )) {
          const topicKeyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(topicKey)
            ? topicKey
            : `'${topicKey}'`;
          topicParts.push(
            `    ${topicKeyStr}: ${serializeValue(topicData, 4)}`,
          );
        }
        contentParts.push(`  ${modKey}: {\n${topicParts.join(",\n")}\n  }`);
      }
    }

    if (contentParts.length > 0) {
      lines.push(`export const ${subject}Content = {`);
      lines.push(contentParts.join(",\n"));
      lines.push("};");
      lines.push("");
    }
  }

  // Build combined tutorialData
  lines.push("export const tutorialData = {");
  for (const subject of Object.keys(subjects).sort()) {
    const meta = subjectMeta[subject] || { title: subject };
    lines.push(`  ${subject}: {`);
    lines.push(`    structure: ${subject}Structure,`);
    lines.push(`    content: ${subject}Content,`);
    lines.push(`    title: '${meta.title}'`);
    lines.push(`  },`);
  }
  lines.push("};");
  lines.push("");
  lines.push("// Backward-compatible exports");
  lines.push("export const tutorialStructure = multimodalStructure");
  lines.push("export const tutorialContent = multimodalContent");

  const output = lines.join("\n");
  fs.writeFileSync(path.join(dataDir, "tutorialData.js"), output, "utf-8");

  console.log(
    `✅ Built tutorialData.js (${(output.length / 1024).toFixed(1)} KB)`,
  );
  console.log(`📚 Subjects: ${Object.keys(subjects).sort().join(", ")}`);
  console.log(
    `📝 Total modules: ${Object.values(subjects).reduce((a, s) => a + Object.keys(s).length, 0)}`,
  );

  // Generate lightweight structures file for tutorialDataLoader.js (sidebar/navigation)
  const structLines = [
    "// Auto-generated from rewritten modules — do not edit manually",
    "// Generated: " + new Date().toISOString(),
    "",
  ];

  for (const subject of Object.keys(subjects).sort()) {
    const modules = subjects[subject];
    const modKeys = Object.keys(modules).sort();
    const structParts = [];

    for (const modKey of modKeys) {
      const modData = modules[modKey];
      if (modData.Structure && modData.Structure[modKey]) {
        structParts.push(
          `  ${modKey}: ${serializeValue(modData.Structure[modKey], 2)}`,
        );
      } else if (modData.Content && modData.Content[modKey]) {
        const topics = Object.keys(modData.Content[modKey]).map((tid) => ({
          id: tid,
          title: formatTopicTitle(tid),
        }));
        const autoStruct = {
          title: formatModuleTitle(subject, modKey),
          topics,
        };
        structParts.push(`  ${modKey}: ${serializeValue(autoStruct, 2)}`);
      }
    }

    if (structParts.length > 0) {
      structLines.push(`export const ${subject}Structure = {`);
      structLines.push(structParts.join(",\n"));
      structLines.push("};");
      structLines.push("");
    }
  }

  const structuresOutput = structLines.join("\n");
  fs.writeFileSync(
    path.join(dataDir, "generatedStructures.js"),
    structuresOutput,
    "utf-8",
  );
  console.log(
    `✅ Built generatedStructures.js (${(structuresOutput.length / 1024).toFixed(1)} KB)`,
  );

  // Validate
  try {
    const generated = await loadModule(path.join(dataDir, "tutorialData.js"));
    console.log("✅ Output passes syntax check");

    // Structure/content alignment check
    let alignmentErrors = 0;
    for (const subject of Object.keys(subjects).sort()) {
      const structure = generated[`${subject}Structure`];
      const content = generated[`${subject}Content`];
      if (!structure || !content) continue;
      for (const [unitKey, unitData] of Object.entries(structure)) {
        for (const topic of unitData.topics || []) {
          if (!content[unitKey]?.[topic.id]) {
            console.error(
              `❌ Missing content: ${subject}/${unitKey}/${topic.id}`,
            );
            alignmentErrors++;
          }
        }
      }
    }
    if (alignmentErrors > 0) {
      console.error(
        `❌ ${alignmentErrors} structure/content mismatch(es) found`,
      );
      process.exit(1);
    }
    console.log("✅ Structure/content alignment verified");
  } catch (e) {
    console.error(`❌ Syntax error in output: ${e.message}`);
    process.exit(1);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
