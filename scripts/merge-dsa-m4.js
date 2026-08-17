/**
 * Merges dsa_m4 topic sources into rewritten/dsa_module4.js
 * Run: node scripts/merge-dsa-m4.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { serializeValue } from "./lib/enhanced-topic.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../src/data");
const outPath = path.join(dataDir, "rewritten/dsa_module4.js");

const { dsaM4 } = await import(
  pathToFileURL(path.join(dataDir, "dsa_m4.js")).href
);

const structure = {
  module4: {
    title: "Module 4: DP & Graph Algorithms",
    topics: [
      { id: "recursion-backtracking", title: "Recursion & Backtracking" },
      { id: "dp-memoization", title: "Dynamic Programming (Memoization)" },
      { id: "dp-tabulation", title: "Dynamic Programming (Tabulation)" },
      { id: "advanced-graphs", title: "Dijkstra, TopSort & Union-Find" },
      { id: "string-algos", title: "Advanced String Algorithms" },
    ],
  },
};

const header = `// DSA Module 4 — enhanced interview-ready content (Linked-List style)
// Merged from dsa_m4.js — regenerate: node scripts/merge-dsa-m4.js

`;

const body =
  header +
  `export const dsaModule4Structure = ${serializeValue(structure, 0)};\n\n` +
  `export const dsaModule4Content = ${serializeValue(dsaM4, 0)};\n`;

fs.writeFileSync(outPath, body, "utf8");
console.log(`✅ Wrote ${outPath} (${(body.length / 1024).toFixed(1)} KB)`);
