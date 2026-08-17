/**
 * Merges dsa_m2 topic sources into rewritten/dsa_module2.js
 * Run: node scripts/merge-dsa-m2.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { serializeValue } from "./lib/enhanced-topic.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../src/data");
const outPath = path.join(dataDir, "rewritten/dsa_module2.js");

const { dsaM2 } = await import(
  pathToFileURL(path.join(dataDir, "dsa_m2.js")).href
);

const structure = {
  module2: {
    title: "Module 2: Trees & Heaps",
    topics: [
      { id: "binary-trees", title: "Binary Trees" },
      { id: "bst", title: "Binary Search Trees (BST)" },
      { id: "heaps", title: "Heaps & Priority Queues" },
      { id: "tries", title: "Tries (Prefix Trees)" },
      { id: "graphs-bfs-dfs", title: "Graphs BFS/DFS Basics" },
    ],
  },
};

const header = `// DSA Module 2 — enhanced interview-ready content (Linked-List style)
// Merged from dsa_m2.js — regenerate: node scripts/merge-dsa-m2.js

`;

const body =
  header +
  `export const dsaModule2Structure = ${serializeValue(structure, 0)};\n\n` +
  `export const dsaModule2Content = ${serializeValue(dsaM2, 0)};\n`;

fs.writeFileSync(outPath, body, "utf8");
console.log(`✅ Wrote ${outPath} (${(body.length / 1024).toFixed(1)} KB)`);
