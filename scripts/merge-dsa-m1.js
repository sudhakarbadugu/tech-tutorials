/**
 * Merges rich dsa_m1.js content into rewritten/dsa_module1.js
 * Renames topic id intro-dsa -> big-o to match structure.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { serializeValue } from "./lib/enhanced-topic.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../src/data");
const outPath = path.join(dataDir, "rewritten/dsa_module1.js");

const { dsaM1 } = await import(
  pathToFileURL(path.join(dataDir, "dsa_m1.js")).href
);

const { "intro-dsa": bigO, ...rest } = dsaM1.module1;
const module1Content = { "big-o": bigO, ...rest };

const structure = {
  module1: {
    title: "Module 1: Core Linear Structures",
    topics: [
      { id: "big-o", title: "Big-O Notation & Complexity Analysis" },
      { id: "arrays-strings", title: "Arrays & Strings" },
      { id: "linked-lists", title: "Linked Lists (Singly & Doubly)" },
      { id: "stacks-queues", title: "Stacks & Queues" },
      { id: "hashmaps-sets", title: "HashMaps & Sets" },
    ],
  },
};

const header = `// DSA Module 1 — enhanced interview-ready content
// Merged from dsa_m1.js — regenerate: node scripts/merge-dsa-m1.js

`;

const body =
  header +
  `export const dsaModule1Structure = ${serializeValue(structure, 0)};\n\n` +
  `export const dsaModule1Content = ${serializeValue({ module1: module1Content }, 0)};\n`;

fs.writeFileSync(outPath, body, "utf8");
console.log(`✅ Wrote ${outPath} (${(body.length / 1024).toFixed(1)} KB)`);